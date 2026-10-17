# Koottu

Koottu is an open-source shared-expense helper for roommates and PG residents. It keeps food, groceries, rent, bills, and trip costs in one ledger, calculates fair shares, and suggests who should settle with whom. Its Gemma-powered flatmate assistant understands English and Malayalam, can read receipt photos, and prepares expense drafts for people to review before saving.

**Live demo:** [Open Koottu](https://koottu-shared-flat-ledger.vercel.app/)

## What works in this prototype

- Add roommates and record expenses, including more than one person paying different amounts.
- Choose which roommates share each expense and use equal or custom shares.
- Review balances and suggested settlements; the app does the arithmetic from the saved ledger.
- Ask Koottu questions or describe an expense in text, Malayalam, or English.
- Record a voice note for transcription, attach a receipt photo, and hear replies in English or Malayalam with Gemini speech.
- Review and edit every expense or repayment draft before confirming it.
- The assistant shows when Gemma is connecting and waits for the connection check before sending AI requests, including receipt analysis.

Ledger data is stored in the current browser only. Invitation links are previews; they do not yet synchronize roommates across devices. Accounts, a shared database, secure invite tokens, and access controls are future work.

## Run locally

1. Install Node.js 22 or newer.
2. In this folder, run `npm start`.
3. Open [http://localhost:4173](http://localhost:4173).

The manual ledger works without an API key. To enable AI features, create a key in Google AI Studio, copy `.env.example` to `.env.local`, and set `GEMINI_API_KEY` in `.env.local`. Restart the local server. Never commit `.env.local` or paste the key into frontend code or chat. If a key has been exposed, revoke it and create a replacement.

Optional settings are `GEMMA_MODEL` (defaults to `gemma-4-26b-a4b-it`) and `GEMINI_TTS_MODEL` (defaults to `gemini-3.8-flash-lite-tts`). AI access and quotas depend on the Google account and current API terms.

## Deploy to Vercel

This repository includes a Node.js serverless adapter for `/api/status`, `/api/parse-expense`, `/api/transcribe`, and `/api/speak`. The app files are served as static assets.

1. Import the GitHub repository `swaffa/koottu-shared-flat-ledger` into Vercel.
2. Set the project root to this repository folder and choose the **Other** framework preset. No build command or output directory is needed.
3. In Vercel Project Settings → Environment Variables, add `GEMINI_API_KEY` for Production. Add it to Preview too if you want AI working on preview deployments. Keep the variable server-side; never use a `VITE_` or `NEXT_PUBLIC_` prefix.
4. Deploy. Vercel will deploy again when new commits are pushed to the connected GitHub branch.

Receipt images are resized in the browser before upload to fit Vercel’s 4.5 MB function request limit. Voice transcription and Gemini calls need the secret environment variable configured in the Vercel project. If you change an environment variable, redeploy so the new deployment receives it.

## Privacy and architecture

Roommate and expense data stays in browser storage on each device. When a person uses the AI assistant, Koottu sends the message, relevant ledger context, and any attached receipt image to Google’s Gemini API. The Google API key stays on the server. The model drafts suggestions; Koottu calculates splits and balances, and nothing is added to the ledger until a person confirms it.

Voice notes are transcribed by Gemini Flash. Read-aloud uses Gemini text-to-speech for English and Malayalam, with browser speech as a fallback. The live Vercel app needs `GEMINI_API_KEY` set in Project Settings → Environment Variables for transcription and Gemini voice. The app does not move money or connect to bank accounts.

## Main files

- `index.html` — app structure and dialogs.
- `styles.css` — responsive visual design.
- `app.js` — interface, browser storage, split calculations, and assistant interactions.
- `server.mjs` — shared API handler and local development server.
- `api/[...path].js` — Vercel serverless entry point.
- `vercel.json` — Vercel function configuration.
