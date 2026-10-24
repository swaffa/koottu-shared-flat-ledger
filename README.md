# Koottu

Koottu is an MIT-licensed expense-sharing web app for flatmates, friends, and PG residents. Describe an expense, attach a receipt, or dictate a message. Review who paid and how the cost is shared, then confirm it. The ledger calculates balances and suggested repayments.

**Website:** https://koottu-shared-flat-ledger.vercel.app/

## Personal and shared spaces

- Personal onboarding replaces the fixed Fitha demo identity.
- Private mode saves a ledger on the current device without an account.
- Shared accounts use Supabase email/password authentication with email confirmation and password recovery.
- Signed-in people can create separate groups, invite roommates, and see the same ledger across devices after refresh or idle sync.
- Group creators can move a roommate out without deleting their financial history. This revokes account access and existing invitations.
- Selected participants, multiple payers, equal splits, custom shares, and partial repayments are supported.
- Concurrent saves are checked using a ledger revision. A conflicting change reloads the current ledger instead of silently overwriting it.

**Shared accounts need configuration.** Until Supabase is connected, sign-up is disabled and private mode remains available. Follow [the Supabase setup guide](supabase/SETUP.md) to activate accounts on your deployment.

## The Gemma assistant

Gemma 4 (`gemma-4-26b-a4b-it` by default) interprets everyday messages, answers questions with ledger context, and drafts expenses from text and receipt images. Recent chat context and the current draft help it respond to corrections. Its prompt supports English, Malayalam, and code switching, with friendly optional humor. Language quality varies.

Draft cards show the bill total, each person's payment and share, and matching totals. A draft must be confirmed or edited before it reaches the ledger. The split engine handles the calculations; model text is never treated as proof that a save happened.

The microphone supports browser speech recognition where available, using the language inferred from the conversation or the device. Configured cloud transcription detects spoken language without a language picker; browser dictation is used when cloud transcription is unavailable or quota-limited. Replies can be read aloud individually or automatically when enabled. Speech services are separate from Gemma and depend on browser support, internet access, and available API quota. Basic explicit expense drafts and exact balance answers have clearly identified local fallbacks; receipt analysis and open conversation require the model.

## Run locally

1. Install Node.js 22 or newer.
2. Copy `.env.example` to `.env.local` and add your settings. Keep it out of Git.
3. Run `npm start` and open http://localhost:4173.

No API key is needed for manual/private expense entry. `GEMINI_API_KEY` enables Gemma and cloud speech. `GEMMA_MODEL` and `GEMINI_TTS_MODEL` optionally override the model names. `SUPABASE_URL` and `SUPABASE_ANON_KEY` enable shared accounts after running the database schema.

Never expose the Google key or a Supabase service-role key in browser code. Ordinary ledger requests use each member's own token. Only the optional verified-phone update and reminder worker use a separate privileged server key. See [LICENSE](LICENSE) for the application license; model and API services have separate terms and quotas.

## Deploy to Vercel

Import this repository with the **Other** framework preset. No build command or output directory is needed. Add the environment variables in Vercel's project settings and redeploy. The Node serverless adapter handles `/api/*`; the frontend is static.

The production Google key must remain server-side. Shared-account AI endpoints require a signed-in user and enforce a database-backed allowance when Supabase is configured. Provider quotas can still cause errors, and manual ledger entry stays available.

## Check the implementation

```
npm install
npm test
```

The development-only PGlite dependency runs the SQL schema against a local PostgreSQL engine, checking row-level access, membership, expiry/revocation, totals, append-only history, save conflicts, and AI allowances. Node tests cover payload validation, user-token forwarding, and endpoint boundaries. Hosted Supabase authentication and real email delivery still require the two-account check in the setup guide.

## Main files

- `app.js`, `index.html`, `styles.css`: dashboard, conversation, expense review, and browser speech.
- `account.js`: onboarding, sessions, group switching, invitations, and sync.
- `cloud.mjs`: authenticated account/database API adapter and ledger validation.
- `server.mjs`, `api/[...path].js`: Gemma/speech endpoints and local/Vercel serving.
- `supabase/schema.sql`: shared data, access policies, transactions, and per-user AI allowance.
- `supabase/SETUP.md`: hosted configuration and a two-account verification checklist.

## Privacy and limits

Private ledgers stay in browser storage. Shared ledgers are stored in your Supabase project and readable by their group members. When the assistant is used, the submitted message, relevant ledger context, recent in-memory conversation, and any receipt are sent to Google's API. Voice may be processed by the browser's recognition service or Gemini speech. Koottu records expenses and repayments; it does not transfer money.

Sync polls every 15 seconds while idle. This release targets small groups with a ledger-size limit; it is not yet an unlimited-scale platform. Larger deployments need normalized financial tables, operational monitoring, account/data deletion workflows, and hosted load testing. Current balances use whole Indian rupees.

## Optional reminders

The dashboard surfaces unsettled balances for the current member. The separate Reminder settings screen supports verified phone enrollment and explicit opt-in for weekly WhatsApp reminders once Twilio is configured. This integration is disabled until the provider, database tables, and server secrets are set up. See [WhatsApp setup and limits](supabase/WHATSAPP.md). Numbers are kept outside the shared ledger and AI context. Vercel's weekly cron submits approved-template messages only for verified, opted-in recipients; it does not send arbitrary messages to numbers entered by another roommate.
