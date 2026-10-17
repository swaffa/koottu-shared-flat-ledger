# Koottu

Koottu is a Malayalam-friendly shared-expense ledger for people living together in a flat or PG. Roommates can track rent, groceries, meals, bills, and trips; choose exactly who shares each expense; and see balances and suggested settlements. The optional Gemma assistant can turn a text prompt or receipt photo into a draft for review, answer ledger questions in English or Malayalam, and add friendly flatmate teasing when a clearly discretionary spend is unusually large.

## Run the local demo

1. Install Node.js 22 or newer.
2. Open this folder in a terminal and run `npm start`.
3. Open [http://localhost:4173](http://localhost:4173).

There are no packages to install. The sample ledger is ready to explore. The dashboard stays in English; Koottu detects the language of each message and replies in English or Malayalam.

## Roommate invitations

Use **Invite roommates** to copy an invitation preview, or add a roommate directly in the dialog. Newly added roommates are included in future expense forms, where you can choose the people sharing each cost. Invitation links open the join preview in this prototype.

This demo stores the roster and ledger in the current browser only. A roommate opening the link on another device will not join the same live ledger yet. Production invitations need a hosted app, shared database, sign-in, expiring invite tokens, and access rules.

## Gemma assistant

The expense ledger works without an AI key. To enable the optional Gemma assistant and Malayalam read-aloud:

1. Create an API key in Google AI Studio.
2. Copy `.env.example` to `.env.local` in this folder.
3. Put the key after `GEMINI_API_KEY=` in `.env.local`.
4. Restart Koottu.

The key stays on the local server and is not sent to the browser. Chat requests use `GEMMA_MODEL` (the current local configuration is `gemma-4-26b-a4b-it`). When enabled, Gemma can:

- read expense prompts in English or Malayalam and prepare a draft;
- inspect a grocery bill or receipt image and suggest its total and category;
- answer questions from the current ledger information provided to it;
- respond in the language of the latest message, including Malayalam script and Manglish, with a playful but respectful Kerala flatmate tone;
- handle greetings and casual chat separately from expense drafts.

Koottu calculates all expense shares and balances itself; the configured Gemma model handles the chatbot conversation, interprets expense messages, reads receipts, and drafts replies. The app does not save an expense or repayment until a person reviews and confirms its draft. A roommate can report a partial repayment by text or voice; Gemma matches it to a current debtor-creditor balance, and the ledger records only the amount confirmed. Voice notes are transcribed by a separate Gemini Flash endpoint so Malayalam and mixed-language speech can be recognized without relying on the dashboard language. The transcript is inserted for review before sending to Gemma. English replies use the browser’s speech voice. Malayalam replies use Gemini TTS (`gemini-3.8-flash-lite-tts`) through the server, so the device does not need an installed Malayalam voice. TTS uses the same server-side Gemini API key as the assistant; API access, quotas, and free-tier eligibility depend on Google’s current account terms. Set `GEMINI_TTS_MODEL` in `.env.local` to override the default TTS model if needed.

Never commit `.env.local` or share a real API key. If a key was exposed, revoke it and create a replacement.

## Data and privacy

Expenses and roommate data are saved in the browser’s local storage on the device running the demo. The app does not yet provide accounts, cross-device synchronization, payment transfers, or production access controls. With Gemma enabled, the prompt context and any attached receipt image are sent to Google’s Gemini API using the configured Gemma model.

## Main files

- `index.html` — app structure and dialogs.
- `styles.css` — responsive visual design.
- `app.js` — interface, browser storage, split calculations, invite preview, and assistant interactions.
- `server.mjs` — local web server and optional server-side Gemma connection.
