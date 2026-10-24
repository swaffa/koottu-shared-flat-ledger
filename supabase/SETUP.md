# Enable shared accounts in Koottu

The code is prepared, but shared accounts cannot work until a Supabase project exists and these settings are added. Private mode works without Supabase.

## 1. Create your project

Open https://supabase.com/dashboard and create a project. Keep the database password in your password manager. Koottu does not need that password in its environment variables.

## 2. Create the database tables and access rules

Open the project's **SQL Editor**, create a new query, paste all of `supabase/schema.sql`, and run it once. This creates groups, memberships, invitations, and the shared ledger. Row-level security restricts reads to group members. Authenticated database functions check ownership and validate writes.

The schema was exercised locally in PostgreSQL via PGlite, including membership isolation and simultaneous edits. Confirm it runs successfully in your hosted project before enabling accounts in production.

## 3. Configure email authentication

In **Authentication → Providers**, enable Email/password authentication and keep email confirmation enabled. Under **Authentication → URL Configuration**, set Site URL to:

`https://koottu-shared-flat-ledger.vercel.app`

Allow this URL and your localhost URL as redirect destinations when developing. The app handles email-confirmation and password-recovery callbacks. For a public launch, configure your own SMTP sender and review the project's authentication email quotas. Supabase's default sender has restrictions.

## 4. Add the connection settings

Find the Project URL and the legacy **anon / public** key in the project's API settings. Use the anon key for the main application. The optional scheduled-reminder worker has a separate server-only service key, described in WHATSAPP.md. Koottu forwards each signed-in user's token so database policies apply to that user.

Add these in Vercel → your Koottu project → Settings → Environment Variables:

```
SUPABASE_URL=https://YOUR_PROJECT.supabase.co
SUPABASE_ANON_KEY=YOUR_ANON_PUBLIC_KEY
```

Keep the existing `GEMINI_API_KEY` and Gemma model setting. Redeploy after changing environment variables. To test locally, put the same settings in the ignored `.env.local`, then run `npm start`.

## 5. Verify with two accounts

1. Create an account, confirm its email, and create a group.
2. Generate an invitation from **Invite roommates**.
3. In a different browser or private window, create a second account and open the invitation.
4. Record an expense and confirm its draft. The other member should see it after refresh or within about 15 seconds while idle.
5. Try opening another group's ID: its data must not be available.
6. Remove the second member from the owner's roommate screen. Their past shares remain; their access is revoked and previous invitation links stop working.
7. Confirm that a missing or expired invitation cannot join a group.

## Current boundaries

- Sync polls every 15 seconds while idle; this is not a WebSocket feed. Saves use a revision number to prevent silent overwrites. A conflict reloads the latest ledger and asks the person to retry.
- The first version stores one JSON ledger per group, up to 100 roommate records and 10,000 expenses. It is a small-group MVP, not an unlimited database architecture. Normalize large ledgers into individual expense/payment rows before expanding those limits.
- Signed-in members can append expenses and completed repayments. The group creator manages roommates and invitations. Existing financial history is append-only.
- Each member has a unique user ID; identical names do not merge accounts. Manually added roommates are ledger participants; adding a name does not create an account or link an existing account's old debts. New account members join from now onward.
- AI calls require authentication when Supabase is configured and are limited to 20 per minute / 300 per day per user. Google's project quotas and speech-language availability still apply. Quotas are limits, not a promise of free access.
- Sessions use per-tab session storage. Chat context stays in memory and is cleared when switching groups or signing out. There is no automatic export/import of an old private ledger into a shared group.

Sources: https://supabase.com/docs/guides/database/postgres/row-level-security , https://supabase.com/docs/guides/auth/passwords , https://supabase.com/docs/guides/auth/rate-limits
