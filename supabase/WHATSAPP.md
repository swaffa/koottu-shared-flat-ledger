# Optional WhatsApp reminders

Dashboard reminders are calculated from the ledger and need no messaging provider. Automatic WhatsApp reminders are optional. They are disabled until Supabase and a messaging provider are configured.

## What the implementation does

- Each signed-in person can register **their own** phone number in Reminder settings.
- A code sent by Twilio Verify (SMS) verifies the phone; verification alone does not opt them into reminders.
- They separately opt into a weekly WhatsApp balance reminder and can turn it off anytime.
- A Vercel cron runs Mondays at 03:30 UTC. It sends only to verified, opted-in users with nonzero group balances, using an approved WhatsApp template.
- Phone details are stored separately from the shared ledger. Other roommates and the AI assistant never receive that contact record.
- A unique database claim prevents the same weekly user/group reminder from being submitted twice. Failed or ambiguous submissions are not retried automatically, to avoid duplicate messages. Provider acceptance is recorded as `queued`, not `delivered`.

## Configure it

1. Finish `SETUP.md` and run `supabase/reminders.sql` in the Supabase SQL editor.
2. Set up a Twilio account, WhatsApp Business sender, and a Twilio Verify service. Provider approvals and usage charges apply. Trial or sandbox messaging has separate restrictions.
3. Create and obtain approval for a WhatsApp template with these variables:

   - `1`: the recipient's display name
   - `2`: group name
   - `3`: a short balance statement such as `You owe ₹450`
   - `4`: the Koottu URL

   Suggested wording: `Hi {{1}}, here is your weekly Koottu reminder for {{2}}: {{3}}. Review your group at {{4}}. You can turn reminders off in Koottu's Reminder settings.`

4. In Vercel's server environment, set:

   ```
   SUPABASE_SERVICE_ROLE_KEY=...
   TWILIO_ACCOUNT_SID=...
   TWILIO_AUTH_TOKEN=...
   TWILIO_VERIFY_SERVICE_SID=...
   TWILIO_WHATSAPP_FROM=whatsapp:+...
   TWILIO_WHATSAPP_CONTENT_SID=HX...
   APP_URL=https://koottu-shared-flat-ledger.vercel.app
   CRON_SECRET=...
   ```

   Use a random cron secret of at least 32 characters. All of these settings stay on the server. The service-role key is used only by the verified-phone update and scheduled delivery worker; ordinary account/ledger requests still use the member's token and database access policies.

5. Redeploy. Use a consenting test recipient, verify their phone in the app, explicitly opt in, and check the approved template with Twilio before enabling the recurring job for real groups.

## Operating limits

This is a starting implementation for a small deployment. A run reads at most 100 opted-in recipients, submits at most 30 user/group messages, and stops after roughly 80 seconds. It does not yet paginate or resume a large backlog. Before scaling, use a paginated queue/worker, delivery-status callbacks, operational alerts, and a retention/deletion policy for contact details and message logs. A provider outage or quota can prevent a reminder from arriving; the dashboard remains the source for current balances.

No SMS or WhatsApp messages are sent just by installing the code. The backend requires the provider settings, a verified number, explicit opt-in, and an authorized cron request.

Official references:
- https://www.twilio.com/docs/whatsapp/api
- https://www.twilio.com/docs/whatsapp/quickstart
- https://www.twilio.com/docs/verify/api
