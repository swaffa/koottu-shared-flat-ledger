(() => {
  const STORE_KEY = 'koottu-ledger-v1';
  const monthLabel = 'October 2026';
  const translations = {
    en: {
      brandCaption: 'Shared homes, fair splits', workspace: 'WORKSPACE', overview: 'Overview', expenses: 'Expenses', households: 'Households', splitRules: 'Split rules', privateSpace: 'Building demo', membersOnly: 'Demo data is saved in this browser', yourBuilding: 'Your building', demoMode: 'Local demo', welcome: 'A little less awkward. A lot more fair.', welcomeText: 'One shared ledger for the small things that keep a building running.', addExpense: 'Add expense', thisMonth: 'BUILDING LEDGER · OCTOBER 2026', totalRecorded: 'Total recorded', expensesCount: 'expenses this month', youAreOwed: 'Your household is owed', basedOnLedger: 'Based on recorded shared costs', youOwe: 'Your household owes', afterExpenses: 'After your expenses are counted', recentActivity: 'Recent activity', seeAll: 'See all', suggestedSettlements: 'Suggested settlements', settleHint: 'A simple way to bring everyone back to zero.', noSettlements: 'Everyone is settled up. No awkward reminders needed.', monthEnd: 'Month end snapshot', householdBalances: 'Household balances', balanceHint: 'Positive means the household should receive money.', assistant: 'Ask Koottu', assistantSub: 'Your shared-expense sidekick', aiStatus: 'Ledger helper', chatWelcome: 'Hey Anu! Add an expense in plain English or Malayalam, like “Paid ₹900 for groceries, shared by all homes.” I’ll prepare a draft for you to check.', tryThese: 'TRY ASKING', chipOwes: 'Who owes whom?', chipAdd: 'Add ₹900 groceries, shared by all', chipMalayalam: 'Explain the balance in Malayalam', composerPlaceholder: 'Describe an expense or ask about the ledger…', send: 'Send', attachReceipt: 'Attach a receipt', voiceInput: 'Speak your expense', assistantHint: 'Amounts are calculated by the ledger. AI drafts always need your confirmation.', viewExpenses: 'All building expenses', search: 'Search expenses', all: 'All', utilities: 'Utilities', maintenance: 'Maintenance', cleaning: 'Cleaning', groceries: 'Shared supplies', other: 'Other', date: 'Date', description: 'Description', paidBy: 'Paid by', sharedBy: 'Shared by', amount: 'Amount', noExpenses: 'No expenses match this view.', homes: 'households', monthToDate: 'Month to date', amountPaid: 'Paid into the ledger', shareOfCosts: 'Share of costs', currentBalance: 'Current balance', householdPeople: 'residents', rulesTitle: 'Simple rules, clear expectations', rulesIntro: 'Every entry shows who paid, which households share it, and how each share was calculated.', equalTitle: 'Equal per household', equalDesc: 'Split a shared building cost evenly among the selected homes. Use this for common-area electricity, cleaning, or water.', customTitle: 'Custom amounts', customDesc: 'Enter a specific share for each home when the benefit or agreement is not equal. The shares must add up to the bill.', transparencyTitle: 'Everyone can check the math', transparencyDesc: 'The ledger shows the recorded amount, payer, participants and share. Confirm payments outside the app; this demo never moves money.', goodPractice: 'Good practice', practiceBody: 'Agree on a split before saving. Keep personal shopping separate from building-wide costs. Fix a mistake by adding a clear correction entry.', practiceOne: 'Record the payer and the date', practiceTwo: 'Select only homes that share the cost', practiceThree: 'Mark a settlement only after people confirm it', ledgerNote: 'Prototype note', ledgerNoteBody: 'This local demo keeps data in this browser. It does not yet sync between neighbors or create accounts.', newEntry: 'NEW LEDGER ENTRY', addBuildingExpense: 'Add a building expense', expenseDialogHint: 'Record who paid and which homes share the cost.', whatFor: 'What was it for?', totalAmount: 'Total amount', category: 'Category', splitMethod: 'Split method', homesSharing: 'Households sharing this expense', customShares: "Enter each household's share", previewHint: 'Choose households and add an amount to preview the split.', cancel: 'Cancel', saveExpense: 'Save expense', equalShare: 'Equal share', customAmounts: 'Custom amounts', buildingExpense: 'building expense', justNow: 'just now', paid: 'Paid', markPaid: 'Mark paid', markedPaid: 'Settlement marked paid.', expenseSaved: 'Expense saved to this browser.', needHousehold: 'Choose at least one household.', amountMismatch: 'Custom shares must add up to the total amount.', amountRequired: 'Enter a valid amount.', aiUnavailable: 'Gemma is not connected yet. You can still record expenses manually. Add a server-side API key to enable AI drafts.', assistantError: 'I could not prepare a draft just now. You can enter the expense manually.', useDraft: 'Review expense draft', draftTitle: 'Draft ready to review', draftNote: 'Check the details before saving. Koottu never adds an expense without your confirmation.', nothingExtracted: 'I could not find a clear expense amount. Try including the amount, for example: “Paid ₹900 for groceries.”', explainSettlements: 'You can settle the current balances with these suggested transfers:', noApiAnswer: 'I can explain this sample ledger and help with basic expense drafts. AI receipt reading and flexible Malayalam conversations need Gemma to be connected by the app owner.', assistantOffline: 'Gemma not connected', assistantOnline: 'Gemma connected', receiptSelected: 'Receipt selected', remove: 'Remove', listening: 'Listening… speak now', micUnavailable: 'Voice input is not available in this browser.', noVoice: 'Voice output is not available here.', languageChanged: 'Language changed to English.', maybeMalayalam: 'സാരമില്ല, ചെലവുകൾ ചേർത്ത് കണക്ക് ഒത്തുനോക്കാം.', assistantPrompt: 'Koottu can draft this, but a human should verify the receipt and split.', understood: 'Got it. I’ve prepared a draft for you to review.', calculateTip: 'Split suggestions are calculated from the saved ledger, not generated by AI.', aboutTitle: 'How this prototype works', aboutBody: 'Households enter shared building expenses. Koottu calculates each home’s share and suggests transfers to settle the ledger. Gemma can help draft entries from text or a receipt image when an API key is configured.', understoodButton: 'Got it', expense: 'expense', expensesPlural: 'expenses', netCredit: 'should receive', netOwes: 'owes', balanced: 'settled', splitEvenly: 'Split evenly', localDraft: 'Local amount draft', noKey: 'AI off', ask: 'Ask Koottu', selectPayer: 'Choose who paid'
    },
    ml: {
      brandCaption: 'ഒരുമിച്ച് താമസം, ന്യായമായ കണക്ക്', workspace: 'പ്രവർത്തനങ്ങൾ', overview: 'അവലോകനം', expenses: 'ചെലവുകൾ', households: 'വീടുകൾ', splitRules: 'വിഹിത നിയമങ്ങൾ', privateSpace: 'ബിൽഡിംഗ് ഡെമോ', membersOnly: 'ഡെമോ വിവരങ്ങൾ ഈ ബ്രൗസറിൽ മാത്രം', yourBuilding: 'നിങ്ങളുടെ കെട്ടിടം', demoMode: 'ലോക്കൽ ഡെമോ', welcome: 'പിണക്കം കുറച്ച്, കണക്ക് ക്ലിയർ ആക്കാം!', welcomeText: 'കെട്ടിടത്തിലെ പൊതുചെലവുകൾക്ക് ഒരു പങ്കിട്ട ലെഡ്ജർ.', addExpense: 'ചെലവ് ചേർക്കൂ', thisMonth: 'ബിൽഡിംഗ് കണക്ക് · ഒക്ടോബർ 2026', totalRecorded: 'ആകെ രേഖപ്പെടുത്തിയത്', expensesCount: 'ഈ മാസത്തെ ചെലവുകൾ', youAreOwed: 'നിങ്ങളുടെ വീട്ടിന് കിട്ടാനുള്ളത്', basedOnLedger: 'രേഖപ്പെടുത്തിയ പൊതുചെലവുകൾ പ്രകാരം', youOwe: 'നിങ്ങളുടെ വീട് കൊടുക്കാനുള്ളത്', afterExpenses: 'നിങ്ങളുടെ ചെലവും കണക്കാക്കി', recentActivity: 'പുതിയ ചെലവുകൾ', seeAll: 'എല്ലാം കാണൂ', suggestedSettlements: 'തീർപ്പാക്കാനുള്ള കണക്ക്', settleHint: 'എല്ലാവരുടെയും ബാലൻസ് ശരിയാക്കാനുള്ള എളുപ്പവഴി.', noSettlements: 'എല്ലാം സെറ്റിൽ ആയി. ഇനി റിമൈൻഡർ വേണ്ട!', monthEnd: 'മാസത്തെ കണക്ക്', householdBalances: 'വീടുകളുടെ ബാലൻസ്', balanceHint: 'പോസിറ്റീവ് ആണെങ്കിൽ ആ വീട്ടിന് പണം കിട്ടാനുണ്ട്.', assistant: 'കൂട്ടുവിനോട് ചോദിക്കൂ', assistantSub: 'നിങ്ങളുടെ ചെലവ് കൂട്ടുകാരൻ', aiStatus: 'ലെഡ്ജർ സഹായി', chatWelcome: 'ഹായ് അനു! “എല്ലാ വീടുകൾക്കും പങ്കിട്ട് ₹900 പലചരക്ക് ഞാൻ കൊടുത്തു” എന്ന് എഴുതൂ. ഞാൻ പരിശോധിക്കാൻ ഒരു ഡ്രാഫ്റ്റ് തയ്യാറാക്കാം.', tryThese: 'ഇങ്ങനെ ചോദിക്കാം', chipOwes: 'ആരാണ് ആർക്കു കൊടുക്കേണ്ടത്?', chipAdd: 'എല്ലാവർക്കുമായി ₹900 പലചരക്ക് ചേർക്കൂ', chipMalayalam: 'ബാലൻസ് മലയാളത്തിൽ പറയൂ', composerPlaceholder: 'ചെലവ് പറയൂ അല്ലെങ്കിൽ കണക്കിനെക്കുറിച്ച് ചോദിക്കൂ…', send: 'അയക്കൂ', attachReceipt: 'ബിൽ ഫോട്ടോ ചേർക്കൂ', voiceInput: 'ചെലവ് പറയൂ', assistantHint: 'കണക്ക് ലെഡ്ജർ തന്നെ കൂട്ടും. AI തയ്യാറാക്കുന്ന ഡ്രാഫ്റ്റ് സേവ് ചെയ്യുന്നതിന് മുമ്പ് പരിശോധിക്കണം.', viewExpenses: 'കെട്ടിടത്തിലെ എല്ലാ ചെലവുകളും', search: 'ചെലവ് തിരയൂ', all: 'എല്ലാം', utilities: 'യൂട്ടിലിറ്റി', maintenance: 'അറ്റകുറ്റപ്പണി', cleaning: 'ക്ലീനിംഗ്', groceries: 'പൊതു സാധനങ്ങൾ', other: 'മറ്റുള്ളവ', date: 'തീയതി', description: 'വിവരണം', paidBy: 'പണം കൊടുത്തത്', sharedBy: 'പങ്കിട്ട വീടുകൾ', amount: 'തുക', noExpenses: 'ഈ കാഴ്ചയിൽ ചെലവുകളില്ല.', homes: 'വീടുകൾ', monthToDate: 'ഈ മാസം വരെ', amountPaid: 'ലെഡ്ജറിലേക്ക് അടച്ചത്', shareOfCosts: 'ചെലവിലെ വിഹിതം', currentBalance: 'ഇപ്പോഴത്തെ ബാലൻസ്', householdPeople: 'താമസക്കാർ', rulesTitle: 'ലളിതമായ നിയമങ്ങൾ, വ്യക്തമായ കണക്ക്', rulesIntro: 'ആരാണ് പണം കൊടുത്തത്, ആരൊക്കെ പങ്കിട്ടു, ഓരോ വിഹിതവും എങ്ങനെ വന്നു എന്നെല്ലാം കാണാം.', equalTitle: 'ഓരോ വീടിനും ഒരേ വിഹിതം', equalDesc: 'തിരഞ്ഞെടുത്ത വീടുകൾക്കിടയിൽ പൊതുചെലവ് തുല്യമായി പങ്കിടാം. പൊതുവൈദ്യുതി, ക്ലീനിംഗ്, വെള്ളം എന്നിവയ്ക്ക്.', customTitle: 'വ്യത്യസ്ത വിഹിതങ്ങൾ', customDesc: 'ചെലവിന്റെ ഗുണം തുല്യമല്ലെങ്കിൽ ഓരോ വീട്ടിന്റെയും തുക നൽകാം. എല്ലാം ചേർത്താൽ ബിൽ തുകയാകണം.', transparencyTitle: 'കണക്ക് എല്ലാവർക്കും പരിശോധിക്കാം', transparencyDesc: 'രേഖപ്പെടുത്തിയ തുക, പണം കൊടുത്തയാൾ, പങ്കിട്ടവർ, ഓരോ വിഹിതവും കാണാം. പണം ആപ്പിലൂടെ പോകുന്നില്ല.', goodPractice: 'നല്ല രീതി', practiceBody: 'സേവ് ചെയ്യുന്നതിന് മുമ്പ് വിഹിതം സമ്മതിക്കൂ. സ്വകാര്യ ചെലവുകൾ വേർതിരിച്ച് രേഖപ്പെടുത്തൂ. തെറ്റുകൾ വ്യക്തമായ തിരുത്തൽ എൻട്രിയായി ചേർക്കൂ.', practiceOne: 'പണം കൊടുത്തയാളെയും തീയതിയും രേഖപ്പെടുത്തൂ', practiceTwo: 'ചെലവ് പങ്കിടുന്ന വീടുകൾ മാത്രം തിരഞ്ഞെടുക്കൂ', practiceThree: 'എല്ലാവരും ഉറപ്പാക്കിയ ശേഷം മാത്രം സെറ്റിൽമെന്റ് സേവ് ചെയ്യൂ', ledgerNote: 'പ്രോട്ടോടൈപ്പ് കുറിപ്പ്', ledgerNoteBody: 'ഈ ഡെമോയുടെ ഡാറ്റ ഈ ബ്രൗസറിൽ മാത്രം. അയൽവീടുകൾക്കിടയിൽ സിങ്ക് ചെയ്യുകയോ അക്കൗണ്ട് ഉണ്ടാക്കുകയോ ചെയ്യുന്നില്ല.', newEntry: 'പുതിയ ലെഡ്ജർ എൻട്രി', addBuildingExpense: 'കെട്ടിടച്ചെലവ് ചേർക്കൂ', expenseDialogHint: 'ആരാണ് പണം കൊടുത്തതെന്നും ഏത് വീടുകളാണ് പങ്കിടുന്നതെന്നും ചേർക്കൂ.', whatFor: 'എന്തിനുള്ള ചെലവ്?', totalAmount: 'ആകെ തുക', category: 'വിഭാഗം', splitMethod: 'വിഹിത രീതി', homesSharing: 'ചെലവ് പങ്കിടുന്ന വീടുകൾ', customShares: 'ഓരോ വീട്ടിന്റെയും വിഹിതം നൽകൂ', previewHint: 'വീടുകൾ തിരഞ്ഞെടുത്ത് തുക ചേർത്താൽ വിഹിതം കാണാം.', cancel: 'റദ്ദാക്കൂ', saveExpense: 'ചെലവ് സേവ് ചെയ്യൂ', equalShare: 'തുല്യ വിഹിതം', customAmounts: 'വ്യത്യസ്ത വിഹിതം', buildingExpense: 'കെട്ടിടച്ചെലവ്', justNow: 'ഇപ്പോൾ', paid: 'അടച്ചു', markPaid: 'അടച്ചതായി അടയാളപ്പെടുത്തൂ', markedPaid: 'സെറ്റിൽമെന്റ് അടച്ചതായി രേഖപ്പെടുത്തി.', expenseSaved: 'ചെലവ് ഈ ബ്രൗസറിൽ സേവ് ചെയ്തു.', needHousehold: 'ഒരു വീടെങ്കിലും തിരഞ്ഞെടുക്കൂ.', amountMismatch: 'വ്യത്യസ്ത വിഹിതങ്ങളുടെ ആകെ തുക ബില്ലിനോട് തുല്യമാകണം.', amountRequired: 'ശരിയായ തുക നൽകൂ.', aiUnavailable: 'Gemma കണക്ട് ചെയ്തിട്ടില്ല. ചെലവ് നേരിട്ട് ചേർക്കാം. AI ഡ്രാഫ്റ്റിന് API കീ സെർവറിൽ ചേർക്കണം.', assistantError: 'ഇപ്പോൾ ഡ്രാഫ്റ്റ് തയ്യാറാക്കാൻ കഴിഞ്ഞില്ല. ചെലവ് നേരിട്ട് ചേർക്കാം.', useDraft: 'ഡ്രാഫ്റ്റ് പരിശോധിക്കൂ', draftTitle: 'ഡ്രാഫ്റ്റ് പരിശോധിക്കാം', draftNote: 'സേവ് ചെയ്യുന്നതിന് മുമ്പ് പരിശോധിക്കൂ. നിങ്ങളുടെ സമ്മതമില്ലാതെ Koottu ചെലവ് ചേർക്കില്ല.', nothingExtracted: 'വ്യക്തമായ തുക കണ്ടില്ല. “പലചരക്കിന് ₹900 കൊടുത്തു” എന്ന് തുക ഉൾപ്പെടുത്തി പറയൂ.', explainSettlements: 'ഇപ്പോഴത്തെ ബാലൻസ് തീർക്കാൻ ഈ തുകകൾ കൈമാറാം:', noApiAnswer: 'ഈ ഡെമോ കണക്ക് വിശദീകരിക്കാനും ലളിതമായ ചെലവ് ഡ്രാഫ്റ്റ് തയ്യാറാക്കാനും കഴിയും. ബിൽ വായനയ്ക്കും കൂടുതൽ സ്വാഭാവിക മലയാളം സംഭാഷണത്തിനും Gemma കണക്ട് ചെയ്യണം.', assistantOffline: 'Gemma കണക്ട് ചെയ്തിട്ടില്ല', assistantOnline: 'Gemma കണക്ട് ചെയ്തു', receiptSelected: 'ബിൽ തിരഞ്ഞെടുത്തു', remove: 'നീക്കൂ', listening: 'കേൾക്കുന്നു… പറയൂ', micUnavailable: 'ഈ ബ്രൗസറിൽ ശബ്ദ ഇൻപുട്ട് ലഭ്യമല്ല.', noVoice: 'ഇവിടെ ശബ്ദമായി മറുപടി നൽകാൻ കഴിയില്ല.', languageChanged: 'ഭാഷ മലയാളമാക്കി.', maybeMalayalam: 'സാരമില്ല, ചെലവുകൾ ചേർത്ത് കണക്ക് ഒത്തുനോക്കാം.', assistantPrompt: 'Koottu ഡ്രാഫ്റ്റ് തയ്യാറാക്കും. ബില്ലും വിഹിതവും ഒരാൾ പരിശോധിക്കണം.', understood: 'ശരി. പരിശോധിക്കാൻ ഒരു ഡ്രാഫ്റ്റ് തയ്യാറാക്കി.', calculateTip: 'സെറ്റിൽമെന്റ് നിർദ്ദേശങ്ങൾ ലെഡ്ജർ കണക്കാക്കുന്നതാണ്, AI അല്ല.', aboutTitle: 'ഈ പ്രോട്ടോടൈപ്പ് എങ്ങനെ പ്രവർത്തിക്കുന്നു', aboutBody: 'വീടുകൾ പൊതുചെലവ് ചേർക്കും. Koottu ഓരോ വീട്ടിന്റെയും വിഹിതം കണക്കാക്കി ബാലൻസ് തീർക്കാൻ തുക നിർദ്ദേശിക്കും. API കീ ചേർത്താൽ Gemma ടെക്സ്റ്റിൽ നിന്നോ ബിൽ ഫോട്ടോയിൽ നിന്നോ ഡ്രാഫ്റ്റ് തയ്യാറാക്കാം.', understoodButton: 'ശരി', expense: 'ചെലവ്', expensesPlural: 'ചെലവുകൾ', netCredit: 'കിട്ടാനുള്ളത്', netOwes: 'കൊടുക്കാനുള്ളത്', balanced: 'സെറ്റിൽ ആയി', splitEvenly: 'തുല്യമായി പങ്കിടൂ', localDraft: 'ലോക്കൽ തുക ഡ്രാഫ്റ്റ്', noKey: 'AI ഓഫ്', ask: 'കൂട്ടുവിനോട് ചോദിക്കൂ', selectPayer: 'ആരാണ് പണം കൊടുത്തത്?'
    }
  };

  Object.assign(translations.en, {
    brandCaption: 'Flatmates, fair splits', households: 'Roommates', yourFlat: 'Your shared flat', privateSpace: 'Roommate demo', membersOnly: 'Demo data stays in this browser', welcome: 'Flat life, minus awkward money talks.', welcomeText: 'Rent, groceries, meals, trips, and bills in one fair shared tab.', thisMonth: 'ROOMMATE TAB · OCTOBER 2026', totalRecorded: 'Group spending', expensesCount: 'shared expenses this month', youAreOwed: 'You are owed', youOwe: 'You owe', monthEnd: 'Roommates', householdBalances: 'Roommate balances', balanceHint: 'Positive means this roommate should receive money.', settleHint: 'A quick, clear way to settle up without the awkward reminder.', chatWelcome: 'Hey Anu! Tell me what someone paid, ask who owes whom, or attach a grocery bill. I’ll draft the math for your review.', assistantSub: 'Your flatmate, always around', chipAdd: 'Add ₹900 groceries for everyone', chipMalayalam: 'Say the balance in Malayalam', viewExpenses: 'All shared expenses', rent: 'Rent', groceries: 'Groceries', food: 'Food & meals', travel: 'Trips & travel', utilities: 'Bills & utilities', maintenance: 'Repairs', cleaning: 'Cleaning', homes: 'roommates', amountPaid: 'Paid for the group', shareOfCosts: 'Fair share', householdPeople: 'roommates', rulesIntro: 'See who paid, who joined each expense, and how every roommate’s share was calculated.', equalTitle: 'Split equally', equalDesc: 'Divide rent, groceries, meals or a trip evenly among the roommates selected for that expense.', customDesc: 'Set a different amount for each roommate when someone skipped a trip or uses a room differently. Shares must add up to the bill.', practiceBody: 'Agree on who is included before saving. Keep personal shopping separate, and record corrections clearly.', ledgerNoteBody: 'This demo stores data in this browser. Invite links are previews; a hosted shared database is needed for roommates to join and sync across devices.', addBuildingExpense: 'Add a shared expense', expenseDialogHint: 'Record who paid and which roommates share the cost.', homesSharing: 'Roommates sharing this expense', customShares: "Enter each roommate’s share", previewHint: 'Choose roommates and add an amount to preview the split.', buildingExpense: 'shared expense', aiUnavailable: 'Gemma is not connected yet. Manual entries still work; add the server-side API key to enable AI drafts.', noApiAnswer: 'I can explain this sample ledger and prepare basic drafts. Gemma is needed for flexible chat and receipt-photo reading.', assistantHint: 'Gemma reads text and receipt photos. Browser speech turns voice into text and reads replies aloud. Review every draft before saving.', assistantOffline: 'Gemma off', assistantOnline: 'Gemma ready', attachReceipt: 'Add a bill or receipt photo', voiceInput: 'Speak your expense', noVoice: 'Speech output is unavailable in this browser.', voiceReady: 'Voice note transcribed. Review it, then send.', speakReply: 'Read this reply aloud', readAloud: 'Read replies aloud', autoSpeakOn: 'Voice replies on', autoSpeakOff: 'Voice replies off', inviteRoommates: 'Invite roommates', inviteEyebrow: 'YOUR SHARED FLAT', inviteTitle: 'Bring your roommates in', inviteIntro: 'Add flatmates to this demo ledger and share an invite preview.', inviteLinkLabel: 'Invitation link', copyLink: 'Copy link', inviteCopied: 'Invite link copied.', inviteLimit: 'Prototype link only: cross-device joining and shared updates need a hosted backend.', addRoommateTitle: 'Or add a roommate here', roommateName: 'Roommate name', roomLabel: 'Room / bed (optional)', addRoommate: 'Add roommate', roommateAdded: 'Roommate added to this browser’s demo ledger.', roommateExists: 'That roommate is already in this ledger.', roommateUnit: 'Roommate', joinInvite: 'You opened a Koottu invite preview. Add your name here to try the flow.', categoryBreakdown: 'Where the group spends', openCategory: 'View expenses', localDemo: 'Local demo'
  });
  Object.assign(translations.ml, {
    brandCaption: 'റൂംമേറ്റ്‌സ്, ക്ലിയർ കണക്ക്', households: 'റൂംമേറ്റ്‌സ്', yourFlat: 'നിങ്ങളുടെ ഷെയർഡ് ഫ്ലാറ്റ്', privateSpace: 'റൂംമേറ്റ് ഡെമോ', membersOnly: 'ഡെമോ വിവരങ്ങൾ ഈ ബ്രൗസറിൽ മാത്രം', welcome: 'ഫ്ലാറ്റിൽ കണക്ക് പറഞ്ഞ് പിണങ്ങണ്ട!', welcomeText: 'വാടക, പലചരക്ക്, ഭക്ഷണം, യാത്ര — എല്ലാം ഒരിടത്ത് ന്യായമായി പങ്കിടാം.', thisMonth: 'റൂംമേറ്റ് കണക്ക് · ഒക്ടോബർ 2026', totalRecorded: 'ഗ്രൂപ്പ് ചെലവ്', expensesCount: 'ഈ മാസത്തെ പങ്കിട്ട ചെലവുകൾ', youAreOwed: 'നിങ്ങൾക്ക് കിട്ടാനുള്ളത്', youOwe: 'നിങ്ങൾ കൊടുക്കാനുള്ളത്', monthEnd: 'റൂംമേറ്റ്‌സ്', householdBalances: 'റൂംമേറ്റ് ബാലൻസ്', balanceHint: 'പോസിറ്റീവ് ആണെങ്കിൽ ആ റൂമേറ്റിന് പണം കിട്ടാനുണ്ട്.', settleHint: 'ഓർമ്മിപ്പിക്കാൻ മടിക്കാതെ കണക്ക് സെറ്റിൽ ചെയ്യാം.', chatWelcome: 'ഹായ് അനു! ആരാണ് പണം കൊടുത്തത്, ആരാണ് ആർക്കു കൊടുക്കാനുള്ളത് എന്ന് ചോദിക്കൂ; ബില്ലിന്റെ ഫോട്ടോയും ചേർക്കാം. സേവ് ചെയ്യുന്നതിന് മുമ്പ് ഡ്രാഫ്റ്റ് കാണിക്കും.', assistantSub: 'എപ്പോഴും കൂടെയുള്ള ഫ്ലാറ്റ് കൂട്ടുകാരൻ', chipAdd: 'എല്ലാവർക്കുമായി ₹900 പലചരക്ക് ചേർക്കൂ', chipMalayalam: 'ബാലൻസ് മലയാളത്തിൽ പറയൂ', viewExpenses: 'പങ്കിട്ട എല്ലാ ചെലവുകളും', rent: 'വാടക', groceries: 'പലചരക്ക്', food: 'ഭക്ഷണം', travel: 'യാത്രയും ട്രിപ്പും', utilities: 'ബില്ലുകളും യൂട്ടിലിറ്റിയും', maintenance: 'അറ്റകുറ്റപ്പണി', cleaning: 'ക്ലീനിംഗ്', homes: 'റൂംമേറ്റ്‌സ്', amountPaid: 'ഗ്രൂപ്പിനായി കൊടുത്തത്', shareOfCosts: 'ന്യായമായ വിഹിതം', householdPeople: 'റൂംമേറ്റ്‌സ്', rulesIntro: 'ആരാണ് പണം കൊടുത്തത്, ആരൊക്കെ പങ്കിട്ടു, ഓരോ റൂമേറ്റിന്റെയും വിഹിതം എങ്ങനെ വന്നു എന്നെല്ലാം കാണാം.', equalTitle: 'തുല്യമായി പങ്കിടാം', equalDesc: 'തിരഞ്ഞെടുത്ത റൂംമേറ്റ്‌സിനിടയിൽ വാടക, പലചരക്ക്, ഭക്ഷണം, ട്രിപ്പ് എന്നിവ തുല്യമായി പങ്കിടാം.', customDesc: 'ആരെങ്കിലും യാത്രയിൽ വന്നില്ലെങ്കിലോ മുറി ഉപയോഗം വ്യത്യസ്തമാണെങ്കിലോ ഓരോരുത്തർക്കും പ്രത്യേകം തുക നൽകാം. ആകെ ബിൽ തുകയാകണം.', practiceBody: 'സേവ് ചെയ്യുന്നതിന് മുമ്പ് ആരൊക്കെ പങ്കിടുമെന്ന് തീരുമാനിക്കൂ. സ്വകാര്യ സാധനങ്ങൾ വേർതിരിച്ച് ചേർക്കൂ; തിരുത്തലും വ്യക്തമായി രേഖപ്പെടുത്തൂ.', ledgerNoteBody: 'ഡെമോ വിവരങ്ങൾ ഈ ബ്രൗസറിൽ മാത്രം. ഇൻവൈറ്റ് ലിങ്ക് പ്രിവ്യൂ മാത്രമാണ്; വേറെ ഉപകരണങ്ങളിൽ ചേരാനും കണക്ക് സിങ്ക് ചെയ്യാനും ഹോസ്റ്റ് ചെയ്ത ഡാറ്റാബേസ് വേണം.', addBuildingExpense: 'പങ്കിട്ട ചെലവ് ചേർക്കൂ', expenseDialogHint: 'ആരാണ് പണം കൊടുത്തതെന്നും ആരൊക്കെ പങ്കിടുന്നെന്നും ചേർക്കൂ.', homesSharing: 'ചെലവ് പങ്കിടുന്ന റൂംമേറ്റ്‌സ്', customShares: 'ഓരോ റൂമേറ്റിന്റെയും വിഹിതം നൽകൂ', previewHint: 'റൂംമേറ്റ്‌സിനെ തിരഞ്ഞെടുത്ത് തുക ചേർത്താൽ വിഹിതം കാണാം.', buildingExpense: 'പങ്കിട്ട ചെലവ്', aiUnavailable: 'Gemma കണക്ട് ചെയ്തിട്ടില്ല. ചെലവ് നേരിട്ട് ചേർക്കാം; AI ഡ്രാഫ്റ്റിന് സെർവറിൽ API കീ ചേർക്കണം.', noApiAnswer: 'ഈ ഡെമോ കണക്ക് വിശദീകരിക്കാനും ലളിതമായ ഡ്രാഫ്റ്റ് തയ്യാറാക്കാനും കഴിയും. സ്വാഭാവിക ചാറ്റിനും ബിൽ ഫോട്ടോ വായിക്കാനും Gemma കണക്ട് വേണം.', assistantHint: 'ടെക്സ്റ്റും ബിൽ ഫോട്ടോയും Gemma വായിക്കും. ബ്രൗസറാണ് ശബ്ദം ടെക്സ്റ്റാക്കുന്നതും മറുപടി വായിക്കുന്നതും. സേവ് ചെയ്യുന്നതിന് മുമ്പ് ഡ്രാഫ്റ്റ് പരിശോധിക്കൂ.', assistantOffline: 'Gemma ഓഫ്‌ലൈൻ', assistantOnline: 'Gemma റെഡി', attachReceipt: 'ബിൽ / രസീത് ഫോട്ടോ ചേർക്കൂ', voiceInput: 'ചെലവ് പറയൂ', noVoice: 'ഈ ബ്രൗസറിൽ ശബ്ദ മറുപടി ലഭ്യമല്ല.', voiceReady: 'പറഞ്ഞത് ടെക്സ്റ്റാക്കി. പരിശോധിച്ച് അയക്കൂ.', speakReply: 'മറുപടി ശബ്ദമായി കേൾക്കൂ', readAloud: 'മറുപടി ശബ്ദമായി വായിക്കൂ', autoSpeakOn: 'ശബ്ദ മറുപടി ഓൺ', autoSpeakOff: 'ശബ്ദ മറുപടി ഓഫ്', inviteRoommates: 'റൂംമേറ്റ്‌സിനെ ക്ഷണിക്കൂ', inviteEyebrow: 'നിങ്ങളുടെ ഫ്ലാറ്റ്', inviteTitle: 'റൂംമേറ്റ്‌സിനെ കൂട്ടൂ', inviteIntro: 'ഡെമോ ലെഡ്ജറിലേക്ക് ആളെ ചേർക്കൂ, ക്ഷണ ലിങ്ക് പങ്കിടൂ.', inviteLinkLabel: 'ക്ഷണ ലിങ്ക്', copyLink: 'ലിങ്ക് കോപ്പി ചെയ്യൂ', inviteCopied: 'ക്ഷണ ലിങ്ക് കോപ്പി ചെയ്തു.', inviteLimit: 'പ്രോട്ടോടൈപ്പ് ലിങ്ക് മാത്രം: വേറെ ഉപകരണത്തിൽ ചേരാനും കണക്ക് പങ്കിടാനും ഹോസ്റ്റ് ചെയ്ത സെർവർ വേണം.', addRoommateTitle: 'അല്ലെങ്കിൽ ഇവിടെ റൂംമേറ്റ് ചേർക്കൂ', roommateName: 'റൂംമേറ്റിന്റെ പേര്', roomLabel: 'മുറി / ബെഡ് (ഐച്ഛികം)', addRoommate: 'റൂംമേറ്റ് ചേർക്കൂ', roommateAdded: 'ഈ ബ്രൗസറിലെ ഡെമോ ലെഡ്ജറിൽ റൂംമേറ്റ് ചേർത്തു.', roommateExists: 'ഈ റൂംമേറ്റ് ലെഡ്ജറിൽ നേരത്തെയുണ്ട്.', roommateUnit: 'റൂംമേറ്റ്', joinInvite: 'Koottu ക്ഷണ ലിങ്കിന്റെ പ്രിവ്യൂ തുറന്നു. ഈ പ്രവാഹം പരീക്ഷിക്കാൻ പേര് ചേർക്കൂ.', categoryBreakdown: 'ഗ്രൂപ്പിന്റെ ചെലവുകൾ', openCategory: 'ചെലവുകൾ കാണൂ', localDemo: 'ലോക്കൽ ഡെമോ'
  });
  Object.assign(translations.en, { chipTrip: 'Add ₹1,800 trip petrol, shared by Anu and Nila', chipTease: 'Roast our spending (gently)', flatmate: 'flatmate', homesSharing: 'Who should share this expense?', splitParticipantsHint: 'Select 1, 2, or more roommates. Only selected roommates share this cost.', splitCount: '{count} selected', equalSplitPreview: '{total} ÷ {count} selected roommates:', customSplitPreview: 'Custom amounts for {count} roommates:', splitRemainder: '₹{amount} leftover rupee(s) shared with: {names}', emptySpendingRoast: 'No expenses logged this month, so your wallets are behaving beautifully. Nothing to roast yet 😄', spendingRoast: 'The group has logged {total} this month. {category} is leading the spend — your wallets may want a tiny flat meeting 😄' });
  Object.assign(translations.ml, { chipTrip: 'അനുവും നീലയും പങ്കിട്ട് ₹1,800 ട്രിപ്പ് പെട്രോൾ ചേർക്കൂ', chipTease: 'ഞങ്ങളുടെ ചെലവിനെ ഒന്ന് കളിയാക്കി പറയൂ', flatmate: 'റൂംമേറ്റ്', homesSharing: 'ഈ ചെലവ് ആരൊക്കെ പങ്കിടണം?', splitParticipantsHint: 'ഒരാളെയോ രണ്ടുപേരെയോ അതിലധികമാളുകളെയോ തിരഞ്ഞെടുക്കൂ. തിരഞ്ഞെടുത്തവർ മാത്രം ഈ ചെലവ് പങ്കിടും.', splitCount: '{count} പേർ തിരഞ്ഞെടുത്തു', equalSplitPreview: '{total} ÷ {count} റൂംമേറ്റ്‌സ്:', customSplitPreview: '{count} പേരുടെ കസ്റ്റം വിഹിതം:', splitRemainder: 'ബാക്കി വരുന്ന ₹{amount} ഇവർക്കായി:', emptySpendingRoast: 'ഈ മാസം ചെലവുകളൊന്നും രേഖപ്പെടുത്തിയിട്ടില്ല; വാലറ്റുകൾ നല്ല കുട്ടികളാണ് 😄', spendingRoast: 'ഈ മാസം ഗ്രൂപ്പ് {total} ചെലവാക്കി. {category} ആണ് മുന്നിൽ — വാലറ്റുകൾക്ക് ഒരു ചെറിയ ഫ്ലാറ്റ് മീറ്റിംഗ് വേണമെന്നുണ്ട് 😄' });
  Object.assign(translations.en, { paidBy: 'Who paid?', payerHelp: 'Select each roommate who contributed and enter how much they paid.', payerCount: '{count} paid', payerHint: 'Choose who paid and enter their contribution.', payerSummary: 'Contributions: {details}', payerTotal: '{paid} of {total} paid', payerMatch: 'Matches the total', payerMismatch: 'Enter an amount for each selected payer so contributions equal the expense total.', payerRequired: 'Select at least one person who paid.', payerAmountRequired: 'Enter a positive amount for every selected payer.', payerMissing: 'Choose who paid in the draft.', participantsMissing: 'Choose who shares this expense in the draft.', draftPayers: 'Paid by', draftShares: 'Shared among', useDraft: 'Review & edit draft' });
  Object.assign(translations.ml, { paidBy: 'ആരാണ് പണം നൽകിയത്?', payerHelp: 'പണം നൽകിയ ഓരോ റൂംമേറ്റിനെയും തിരഞ്ഞെടുത്ത് അവർ നൽകിയ തുക ചേർക്കൂ.', payerCount: '{count} പേർ പണം നൽകി', payerHint: 'പണം നൽകിയവരെ തിരഞ്ഞെടുത്ത് അവരുടെ തുക നൽകൂ.', payerSummary: 'നൽകിയ തുകകൾ: {details}', payerTotal: '{paid} / {total} നൽകി', payerMatch: 'ആകെ തുകയുമായി ഒത്തിരിക്കുന്നു', payerMismatch: 'തിരഞ്ഞെടുത്ത ഓരോരുത്തരുടെയും തുക ചേർത്ത് മൊത്തം ചെലവിനോട് ഒത്താക്കൂ.', payerRequired: 'പണം നൽകിയ ഒരാളെയെങ്കിലും തിരഞ്ഞെടുക്കൂ.', payerAmountRequired: 'തിരഞ്ഞെടുത്ത ഓരോരുത്തർക്കും പൂജ്യത്തേക്കാൾ കൂടുതലുള്ള തുക നൽകൂ.', payerMissing: 'ഡ്രാഫ്റ്റിൽ പണം നൽകിയ ആളെ തിരഞ്ഞെടുക്കൂ.', participantsMissing: 'ഈ ചെലവ് പങ്കിടുന്നവരെ ഡ്രാഫ്റ്റിൽ തിരഞ്ഞെടുക്കൂ.', draftPayers: 'പണം നൽകിയത്', draftShares: 'പങ്കിടുന്നത്', useDraft: 'ഡ്രാഫ്റ്റ് പരിശോധിച്ച് തിരുത്തൂ' });
  Object.assign(translations.en, { assistantHint: 'Say who paid and how much each person contributed. Koottu drafts the split for review; confirm before saving.' });
  Object.assign(translations.ml, { assistantHint: 'ആരാണ് എത്ര നൽകിയതെന്ന് പറയൂ. Koottu പരിശോധിക്കാനുള്ള ഡ്രാഫ്റ്റ് തയ്യാറാക്കും; സേവ് ചെയ്യുന്നതിന് മുമ്പ് ഉറപ്പാക്കൂ.' });
  Object.assign(translations.en, { shareLink: 'Share' });
  Object.assign(translations.ml, { shareLink: 'പങ്കിടൂ' });
  Object.assign(translations.en, { aboutBody: 'Roommates track rent, groceries, meals, bills and trips. Koottu calculates fair shares. Gemma drafts from text or bill photos; voice notes are transcribed before you review and send them. Invite links are previews until a shared backend is connected.' });
  Object.assign(translations.ml, { aboutBody: 'വാടക, പലചരക്ക്, ഭക്ഷണം, ബില്ലുകൾ, യാത്രകൾ എന്നിവ റൂംമേറ്റ്‌സിന് രേഖപ്പെടുത്താം. Koottu വിഹിതം കൂട്ടും. ടെക്സ്റ്റും ബിൽ ഫോട്ടോയും Gemma ഡ്രാഫ്റ്റാക്കും; ശബ്ദം ടെക്സ്റ്റാക്കിയ ശേഷം പരിശോധിച്ച് അയക്കാം. പങ്കിട്ട സെർവർ ചേർക്കുന്നതുവരെ ഇൻവൈറ്റ് ലിങ്ക് പ്രിവ്യൂ മാത്രമാണ്.' });
  Object.assign(translations.en, { voiceStop: 'Stop recording', voiceRecording: 'Recording… tap the mic again when finished.', voiceTranscribing: 'Transcribing your voice…', voicePermission: 'Allow microphone access in your browser, then try again.', voiceUnsupported: 'This browser cannot record audio. Try Chrome or type your expense.', voiceReady: 'Voice converted to text. Review it, then send.', micUnavailable: 'Could not start voice input. Check microphone access and try again.', assistantUnreachable: 'Gemma unavailable', assistantSub: 'Your flatmate, always around', readAloud: 'Read latest reply aloud', speakReply: 'Read this reply aloud', noReplyToRead: 'Koottu has not replied yet.', speechGenerating: 'Preparing Malayalam audio…', speechFailed: 'Could not play this reply. Check your browser audio settings.' });
  Object.assign(translations.en, { paymentDraftTitle: 'Payment draft', paymentDraftHint: 'Check the amount before recording this transfer.', confirmPayment: 'Confirm payment', paymentRecorded: 'Payment recorded. Remaining balance:', paymentOutdated: 'This balance changed while the draft was open. Check the current settlements and try again.', paymentTooLarge: 'That amount is more than the current outstanding balance. No payment was recorded.', assistantHint: 'Report a shared cost or a repayment. Koottu checks the ledger and asks you to confirm before saving.' });
  Object.assign(translations.ml, { voiceStop: 'റെക്കോർഡിംഗ് നിർത്തൂ', voiceRecording: 'റെക്കോർഡ് ചെയ്യുന്നു… കഴിഞ്ഞാൽ മൈക്ക് വീണ്ടും അമർത്തൂ.', voiceTranscribing: 'ശബ്ദം ടെക്സ്റ്റാക്കുന്നു…', voicePermission: 'ബ്രൗസറിൽ മൈക്ക് ഉപയോഗിക്കാൻ അനുമതി നൽകി വീണ്ടും ശ്രമിക്കൂ.', voiceUnsupported: 'ഈ ബ്രൗസറിൽ ശബ്ദം റെക്കോർഡ് ചെയ്യാനാകില്ല. Chrome ഉപയോഗിക്കൂ അല്ലെങ്കിൽ ടൈപ്പ് ചെയ്യൂ.', voiceReady: 'പറഞ്ഞത് ടെക്സ്റ്റാക്കി. പരിശോധിച്ച് അയക്കൂ.', micUnavailable: 'ശബ്ദ ഇൻപുട്ട് തുടങ്ങാനായില്ല. മൈക്ക് അനുമതി പരിശോധിച്ച് വീണ്ടും ശ്രമിക്കൂ.', assistantUnreachable: 'Gemma ലഭ്യമല്ല' });
  Object.assign(translations.en, { assistantChecking: 'Connecting to Gemma…' });
  Object.assign(translations.ml, { assistantChecking: 'Gemma-യുമായി ബന്ധപ്പെടുന്നു…' });
  Object.assign(translations.en, { assistantHint: 'Speak in English or Malayalam and say how much each person paid. Koottu drafts the split for review; confirm before saving.' });
  Object.assign(translations.ml, { assistantHint: 'ഇംഗ്ലീഷിലോ മലയാളത്തിലോ ഓരോരുത്തരും എത്ര നൽകിയെന്ന് പറയൂ. Koottu പരിശോധിക്കാനുള്ള ഡ്രാഫ്റ്റ് തയ്യാറാക്കും; സേവ് ചെയ്യുന്നതിന് മുമ്പ് ഉറപ്പാക്കൂ.' });
  Object.assign(translations.en, {
    chatWelcome: 'Hey {name}! Tell me what someone paid, ask who owes whom, or attach a grocery bill. I’ll draft the math for your review.',
    movedOut: 'Moved out', movedOutHint: 'Past expenses and balances are kept for your records.',
    markMovedOut: 'Mark moved out', restoreRoommate: 'Restore', roommateMovedOut: 'Roommate marked as moved out. Past ledger entries are preserved.',
    roommateRestored: 'Roommate restored to the active list.', confirmMovedOut: 'Mark {name} as moved out? Their old expenses and any unsettled balance will stay in the ledger.',
    currentUserCannotLeave: 'Change the current user before marking them as moved out.', noRoommatesYet: 'No roommates here yet. Invite someone to start sharing expenses.',
    newMemberNote: 'They join from today. Past expenses keep their original split and won’t be charged to them.',
    joined: 'Joined', roommateExists: 'A roommate record named “{name}” already exists for {room}. If this is a different person, change the room label or add a surname.',
    roommateAdded: 'Roommate added for future expenses. Past splits are unchanged.'
  });
  Object.assign(translations.ml, {
    chatWelcome: 'ഹായ് {name}! ആരാണ് പണം കൊടുത്തത്, ആരാണ് ആർക്കു കൊടുക്കാനുള്ളത് എന്ന് ചോദിക്കൂ; ബില്ലിന്റെ ഫോട്ടോയും ചേർക്കാം. പരിശോധിക്കാൻ ഒരു ഡ്രാഫ്റ്റ് തയ്യാറാക്കാം.',
    movedOut: 'താമസം മാറിയവർ', movedOutHint: 'പഴയ ചെലവുകളും ബാലൻസും രേഖയ്ക്കായി സൂക്ഷിക്കും.',
    markMovedOut: 'താമസം മാറിയതായി അടയാളപ്പെടുത്തൂ', restoreRoommate: 'തിരികെ ചേർക്കൂ', roommateMovedOut: 'റൂംമേറ്റിനെ താമസം മാറിയതായി അടയാളപ്പെടുത്തി. പഴയ കണക്ക് സൂക്ഷിച്ചിട്ടുണ്ട്.',
    roommateRestored: 'റൂംമേറ്റിനെ സജീവ പട്ടികയിലേക്ക് തിരികെ ചേർത്തു.', confirmMovedOut: '{name} താമസം മാറിയതായി അടയാളപ്പെടുത്തട്ടേ? പഴയ ചെലവുകളും ബാക്കി ബാലൻസും ലെഡ്ജറിൽ തുടരും.',
    currentUserCannotLeave: 'നിലവിലെ ഉപയോക്താവിനെ മാറ്റിയ ശേഷം മാത്രം അവരെ താമസം മാറിയതായി അടയാളപ്പെടുത്താം.', noRoommatesYet: 'ഇവിടെ റൂംമേറ്റ്‌സ് ഇല്ല. ചെലവുകൾ പങ്കിടാൻ ഒരാളെ ക്ഷണിക്കൂ.',
    newMemberNote: 'ഇന്ന് മുതൽ പുതിയ റൂംമേറ്റ് ഗ്രൂപ്പിൽ ചേരും. പഴയ ചെലവുകളുടെ വിഹിതം മാറില്ല; അവർക്കത് പങ്കിടേണ്ടതുമില്ല.',
    joined: 'ചേർന്നത്', roommateExists: 'ഈ പേരും മുറിയും ഉള്ള റൂംമേറ്റ് ഇതിനകം ഉണ്ട്. വേറെ ആളാണെങ്കിൽ മുറിയുടെ പേര് മാറ്റുകയോ മുഴുവൻ പേര് ചേർക്കുകയോ ചെയ്യൂ.',
    roommateAdded: 'ഇനി ചേർക്കുന്ന ചെലവുകൾക്കായി റൂംമേറ്റിനെ ചേർത്തു. പഴയ വിഹിതങ്ങൾ മാറില്ല.'
  });

  const colors = ['avatar-lime', 'avatar-blue', 'avatar-coral', 'avatar-purple'];
  const icons = { rent: '🏠', groceries: '🛒', food: '🍛', travel: '🛺', utilities: '⚡', maintenance: '🛠', cleaning: '🧹', other: '✳' };
  const defaults = {
    building: { name: 'Kakkanad Flatmates', location: 'PG · Kochi' },
    currentHouseholdId: 'fitha',
    households: [
      { id: 'fitha', name: 'Fitha', unit: 'Room 01', members: ['Fitha'], color: colors[0] }
    ],
    expenses: [],
    settlements: []
  };
  let state = loadState();
  normalizeState();
  let view = 'overview';
  const language = 'en';
  let expenseFilter = 'all';
  let searchTerm = '';
  let gemmaConnected = false;
  let geminiConfigured = false;
  let gemmaStatusChecked = false;
  let gemmaCheckPromise = null;
  let selectedReceipt = null;
  let payerAmountsTouched = false;
  let lastAssistantReply = '';
  let toastTimer;
  let speechAudio = null;
  let speechAudioUrl = '';
  let speechAbortController = null;
  let voiceRecorder = null;
  let voiceStream = null;
  let voiceChunks = [];
  let voiceStopTimer = null;
  let voiceStarting = false;
  let browserRecognition = null;
  let browserVoiceFailed = false;
  let voiceTranscribing = false;

  function loadState() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORE_KEY));
      if (saved && Array.isArray(saved.households) && Array.isArray(saved.expenses)) return saved;
    } catch { /* use the starter ledger */ }
    return structuredClone(defaults);
  }
  function saveState() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
  function createInviteCode() {
    const bytes = new Uint8Array(5);
    if (window.crypto?.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (let index = 0; index < bytes.length; index += 1) bytes[index] = Math.floor(Math.random() * 256);
    return [...bytes].map(value => value.toString(16).padStart(2, '0')).join('').toUpperCase();
  }
  function normalizeState() {
    let changed = false;
    if (!Array.isArray(state.settlements)) { state.settlements = []; changed = true; }
    if (!state.inviteCode) { state.inviteCode = createInviteCode(); changed = true; }
    if (state.building?.name === 'Sreepadam Apartments') {
      state.building.name = 'Kakkanad Flatmates';
      state.building.location = 'PG · Kochi';
      changed = true;
    }
    const legacyRoommates = { h1: ['Anu\'s Household', 'Anu', 'Room 01'], h2: ['Nila Residence', 'Nila', 'Room 02'], h3: ['Green Corner', 'Meera', 'Room 03'] };
    state.households.forEach(home => {
      const legacy = legacyRoommates[home.id];
      if (legacy && home.name === legacy[0]) {
        home.name = legacy[1]; home.unit = legacy[2]; home.members = [legacy[1]]; changed = true;
      }
    });
    state.households.forEach(home => {
      if (home.active === undefined) { home.active = true; changed = true; }
      if (/^(anu|nila|meera)$/i.test(home.name) && home.active) {
        home.active = false;
        home.leftAt = new Date().toISOString().slice(0, 10);
        changed = true;
      }
    });
    let fitha = state.households.find(home => home.name.trim().toLocaleLowerCase() === 'fitha');
    if (!fitha) {
      fitha = { id: 'fitha', name: 'Fitha', unit: 'Room 01', members: ['Fitha'], color: colors[0], active: true };
      state.households.push(fitha);
      changed = true;
    }
    if (fitha.name !== 'Fitha') { fitha.name = 'Fitha'; changed = true; }
    if (Array.isArray(fitha.members) && fitha.members.length === 1 && fitha.members[0].toLocaleLowerCase() === 'fitha' && fitha.members[0] !== 'Fitha') {
      fitha.members[0] = 'Fitha'; changed = true;
    }
    if (state.currentHouseholdId !== fitha.id) { state.currentHouseholdId = fitha.id; changed = true; }
    if (changed) saveState();
  }
  function t(key) { return translations[language]?.[key] || translations.en[key] || key; }
  function money(value) { return new Intl.NumberFormat(language === 'ml' ? 'ml-IN' : 'en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.round(value || 0)); }
  function escapeHtml(value) { return String(value ?? '').replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch])); }
  function household(id) { return state.households.find(item => item.id === id) || { id, name: 'Unknown roommate', unit: '', members: [], color: colors[0] }; }
  function activeHouseholds() { return state.households.filter(home => home.active !== false); }
  function currentHousehold() { return household(state.currentHouseholdId); }
  function expenseContributions(expense) {
    if (expense.contributions && typeof expense.contributions === 'object' && !Array.isArray(expense.contributions)) {
      return Object.fromEntries(Object.entries(expense.contributions).map(([id, value]) => [id, Number(value) || 0]).filter(([, value]) => value > 0));
    }
    return expense.payerId ? { [expense.payerId]: Number(expense.amount) || 0 } : {};
  }
  function contributorLabel(expense, includeAmounts = false) {
    const contributors = Object.entries(expenseContributions(expense));
    if (!contributors.length) return household(expense.payerId).name;
    return contributors.map(([id, amount]) => `${household(id).name}${includeAmounts ? ` ${money(amount)}` : ''}`).join(' · ');
  }
  function chatWelcome() { return t('chatWelcome').replaceAll('{name}', currentHousehold().name); }
  function getBalances() {
    const balances = Object.fromEntries(state.households.map(home => [home.id, 0]));
    state.expenses.forEach(expense => {
      Object.entries(expenseContributions(expense)).forEach(([id, amount]) => { if (balances[id] !== undefined) balances[id] += amount; });
      Object.entries(expense.shares || {}).forEach(([id, amount]) => { if (balances[id] !== undefined) balances[id] -= Number(amount) || 0; });
    });
    state.settlements.filter(item => item.paid).forEach(item => {
      if (balances[item.from] !== undefined) balances[item.from] += item.amount;
      if (balances[item.to] !== undefined) balances[item.to] -= item.amount;
    });
    return balances;
  }
  function makeSettlements(balances = getBalances()) {
    const debtors = Object.entries(balances).filter(([, n]) => n < -0.5).map(([id, amount]) => ({ id, amount: -amount }));
    const creditors = Object.entries(balances).filter(([, n]) => n > 0.5).map(([id, amount]) => ({ id, amount }));
    const result = [];
    let d = 0, c = 0;
    while (d < debtors.length && c < creditors.length) {
      const amount = Math.min(debtors[d].amount, creditors[c].amount);
      if (amount >= 1) result.push({ from: debtors[d].id, to: creditors[c].id, amount: Math.round(amount) });
      debtors[d].amount -= amount; creditors[c].amount -= amount;
      if (debtors[d].amount < 0.5) d++;
      if (creditors[c].amount < 0.5) c++;
    }
    return result;
  }
  function totalExpenses() { return state.expenses.reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0); }
  function dateText(value) { const date = new Date(`${value}T12:00:00`); return new Intl.DateTimeFormat(language === 'ml' ? 'ml-IN' : 'en-IN', { day: 'numeric', month: 'short' }).format(date); }
  function initials(home) { return (home.name.match(/[A-Za-zഀ-ൿ]/g) || ['H']).slice(0, 1).join('').toUpperCase(); }
  function avatar(home, extra = '') { return `<span class="avatar ${escapeHtml(home.color || colors[0])} ${extra}">${escapeHtml(initials(home))}</span>`; }
  function setHeader() {
    document.getElementById('building-name').textContent = state.building?.name || defaults.building.name;
    document.getElementById('building-location').textContent = state.building?.location || defaults.building.location;
    document.getElementById('expense-count').textContent = state.expenses.length;
    document.getElementById('crumb-view').textContent = t(view === 'rules' ? 'splitRules' : view);
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[language][key]) el.textContent = t(key);
    });
    document.getElementById('profile-name').textContent = currentHousehold().name;
    document.getElementById('profile-household').textContent = currentHousehold().unit || t('roommateUnit');
    const profileAvatar = document.querySelector('.profile-button .avatar');
    profileAvatar.textContent = initials(currentHousehold());
    document.querySelectorAll('#expense-category option').forEach(option => { option.textContent = t(option.value); });
    const splitOptions = document.querySelectorAll('#split-method option');
    if (splitOptions[0]) splitOptions[0].textContent = t('equalShare');
    if (splitOptions[1]) splitOptions[1].textContent = t('customAmounts');
    document.getElementById('expense-title').placeholder = language === 'ml' ? 'ഉദാ: ഈ മാസത്തെ വാടക, ഈ ആഴ്ചയിലെ പലചരക്ക്' : 'e.g. October rent, weekly groceries';
    document.getElementById('roommate-name').placeholder = language === 'ml' ? 'ഉദാ: റിയ' : 'e.g. Riya';
    document.getElementById('roommate-room').placeholder = language === 'ml' ? 'ഉദാ: മുറി 2' : 'e.g. Room 2';
    const assistantInput = document.getElementById('assistant-input');
    if (assistantInput) assistantInput.placeholder = t('composerPlaceholder');
    document.querySelectorAll('.nav-item').forEach(button => button.classList.toggle('active', button.dataset.view === view));
    document.querySelector('.local-badge [data-i18n="demoMode"]').textContent = t('localDemo');
  }
  function pageHeading(title, subtitle, button = '') {
    return `<div class="page-heading"><div><h1>${title}</h1><p>${subtitle}</p></div>${button}</div>`;
  }
  function expenseRow(expense) {
    const shareHomes = Object.keys(expense.shares || {}).map(household);
    const payers = Object.keys(expenseContributions(expense)).map(id => household(id).name).join(' + ') || household(expense.payerId).name;
    return `<article class="expense-row"><span class="expense-emoji">${icons[expense.category] || icons.other}</span><div class="expense-info"><strong>${escapeHtml(expense.title)}</strong><small>${dateText(expense.date)} · ${shareHomes.length} ${t('homes').toLowerCase()}</small></div><span class="payer-pill" title="${escapeHtml(contributorLabel(expense, true))}">${escapeHtml(payers)}</span><div class="expense-meta"><strong>${money(expense.amount)}</strong><small>${t(expense.category) || t('other')}</small></div></article>`;
  }
  function recentExpenses(limit = 5) {
    const list = [...state.expenses].sort((a, b) => b.date.localeCompare(a.date)).slice(0, limit);
    return list.length ? list.map(expenseRow).join('') : `<div class="empty-state"><strong>${t('noExpenses')}</strong></div>`;
  }
  function settlementsCard() {
    const balances = getBalances();
    const settlements = makeSettlements(balances);
    return `<section class="card"><div class="card-header"><div><h2>${t('suggestedSettlements')}</h2><p>${t('settleHint')}</p></div><span class="stat-icon">↗</span></div><div class="settlement-list">${settlements.length ? settlements.map((item, index) => {
      const from = household(item.from), to = household(item.to);
      const existing = state.settlements.find(record => record.month === monthLabel && record.from === item.from && record.to === item.to && record.amount === item.amount && !record.paid);
      return `<div class="settlement-row"><div class="settlement-avatars">${avatar(from)}${avatar(to)}</div><div class="settlement-copy"><strong>${escapeHtml(from.name)} → ${escapeHtml(to.name)}</strong><small>${escapeHtml(from.unit)} to ${escapeHtml(to.unit)}</small></div><div class="settlement-amount"><strong>${money(item.amount)}</strong><button type="button" data-settle="${existing?.id || `suggest-${index}`}" data-from="${item.from}" data-to="${item.to}" data-amount="${item.amount}">${t('markPaid')}</button></div></div>`;
    }).join('') : `<div class="settlement-empty">${t('noSettlements')}</div>`}</div><div class="settlement-footer"><span>${t('calculateTip')}</span><strong>${settlements.length} ${t(settlements.length === 1 ? 'expense' : 'expenses')}</strong></div></section>`;
  }
  function balancesCard(compact = false) {
    const balances = getBalances();
    const rows = state.households.map(home => {
      const val = balances[home.id] || 0;
      const label = val > .5 ? `${t('netCredit')} ${money(val)}` : val < -.5 ? `${t('netOwes')} ${money(-val)}` : t('balanced');
      const tone = val > .5 ? 'positive' : val < -.5 ? 'negative' : 'neutral';
      if (home.active === false && Math.abs(val) < .5) return '';
      const status = home.active === false ? ` · ${t('movedOut')}` : '';
      return compact ? `<div class="household-mini">${avatar(home)}<div class="household-mini-copy"><strong>${escapeHtml(home.name)}</strong><small>${escapeHtml(home.unit)}${status}</small></div><span class="household-mini-balance ${tone}">${val > .5 ? '+' : val < -.5 ? '−' : ''}${money(Math.abs(val))}</span></div>` : `<div class="household-mini">${avatar(home)}<div class="household-mini-copy"><strong>${escapeHtml(home.name)}</strong><small>${escapeHtml(home.unit)}${status} · ${escapeHtml(label)}</small></div><span class="household-mini-balance ${tone}">${val > .5 ? '+' : val < -.5 ? '−' : ''}${money(Math.abs(val))}</span></div>`;
    }).join('');
    return `<section class="card"><div class="card-header"><div><h2>${t('householdBalances')}</h2><p>${t('balanceHint')}</p></div></div><div class="household-mini-list">${rows}</div></section>`;
  }
  function assistantCard() {
    const onlineLabel = gemmaConnected ? t('assistantOnline') : gemmaStatusChecked ? t('assistantOffline') : t('assistantChecking');
    const tripHomes = activeHouseholds();
    const groceryPrompt = language === 'en'
      ? `${currentHousehold().name} paid ₹900 for groceries, shared by all roommates`
      : `${currentHousehold().name} ₹900 പലചരക്ക് കൊടുത്തു, എല്ലാവരും പങ്കിടുന്നു`;
    const tripLabel = language === 'en' ? 'Add ₹1,800 trip petrol for everyone' : 'എല്ലാവർക്കുമായി ₹1,800 ട്രിപ്പ് പെട്രോൾ';
    const tripPrompt = language === 'en'
      ? `${currentHousehold().name} paid ₹1,800 for trip petrol, shared by all roommates`
      : `${currentHousehold().name} ട്രിപ്പ് പെട്രോളിന് ₹1,800 കൊടുത്തു, എല്ലാവരും പങ്കിടുന്നു`;
    const suggestion = (prompt, label) => `<button class="suggestion-chip" type="button" data-prompt="${escapeHtml(prompt)}">${escapeHtml(label)}</button>`;
    return `<section class="card assistant-card" id="assistant-card"><div class="assistant-header"><div class="assistant-title"><span class="assistant-orb">✳</span><span><strong>${t('assistant')}</strong><small>${t('assistantSub')}</small></span></div><div class="assistant-tools"><button class="speech-toggle" id="read-aloud-button" type="button" title="${t('readAloud')}" aria-label="${t('readAloud')}">🔊 <span>${t('readAloud')}</span></button><span class="model-chip" id="model-chip">${onlineLabel}</span></div></div><div class="assistant-body"><div class="chat-history" id="chat-history"><div class="chat-message"><span class="chat-avatar">✳</span><div class="chat-bubble">${escapeHtml(chatWelcome())}</div></div></div><aside class="chat-side"><span class="chat-side-label">${t('tryThese')}</span>${suggestion(t('chipOwes'), t('chipOwes'))}${suggestion(t('chipTease'), t('chipTease'))}${suggestion(groceryPrompt, t('chipAdd'))}${tripHomes.length > 1 ? suggestion(tripPrompt, tripLabel) : ''}${suggestion(t('chipMalayalam'), t('chipMalayalam'))}</aside></div><div id="receipt-preview-wrap"></div><form class="assistant-compose" id="assistant-form"><div class="composer-wrap"><textarea id="assistant-input" rows="1" placeholder="${t('composerPlaceholder')}"></textarea><div class="composer-actions"><button class="composer-icon" id="receipt-button" type="button" title="${t('attachReceipt')}" aria-label="${t('attachReceipt')}">▧</button><select id="voice-language" class="voice-language" aria-label="Spoken language" title="Choose the language you will speak"><option value="en-IN">English</option><option value="ml-IN">Malayalam</option></select><button class="composer-icon" id="voice-button" type="button" title="${t('voiceInput')}" aria-label="${t('voiceInput')}">🎙</button></div></div><button class="send-button" type="submit" aria-label="${t('send')}">➤</button></form><div class="assistant-hint">${t('assistantHint')}</div></section>`;
  }
  function categoryBreakdown() {
    const categories = ['rent', 'groceries', 'food', 'travel'];
    return `<section class="category-overview"><div class="category-overview-heading"><div><h2>${t('categoryBreakdown')}</h2><p>${t('monthToDate')}</p></div><button class="text-button" data-view="expenses">${t('openCategory')} →</button></div><div class="category-tile-grid">${categories.map(category => {
      const total = state.expenses.filter(expense => expense.category === category).reduce((sum, expense) => sum + Number(expense.amount || 0), 0);
      return `<button class="category-tile" type="button" data-filter="${category}"><span class="category-tile-icon">${icons[category]}</span><span class="category-tile-copy"><small>${t(category)}</small><strong>${money(total)}</strong></span><span class="category-tile-arrow">↗</span></button>`;
    }).join('')}</div></section>`;
  }
  function overview() {
    const balance = getBalances()[state.currentHouseholdId] || 0;
    const amount = Math.abs(balance);
    const paidOwedLabel = balance >= 0 ? t('youAreOwed') : t('youOwe');
    return `${pageHeading(t('welcome'), t('welcomeText'), `<div class="heading-actions"><button class="button button-quiet" data-action="invite"><span>↗</span>${t('inviteRoommates')}</button><button class="button button-primary" data-action="add-expense"><span>＋</span>${t('addExpense')}</button></div>`)}
      <section class="overview-banner"><div class="banner-copy"><span class="eyebrow">${t('thisMonth')}</span><h2>${escapeHtml(state.building?.name || defaults.building.name)}</h2><p>${escapeHtml(state.building?.location || defaults.building.location)} · ${activeHouseholds().length} ${t('homes')}</p></div><div class="banner-art" aria-hidden="true"><span class="banner-leaf">⌂</span><span class="banner-leaf">✳</span></div></section>
      <div class="stats-grid"><article class="stat-card"><div class="stat-top"><span>${t('totalRecorded')}</span><span class="stat-icon">↗</span></div><div class="stat-value">${money(totalExpenses())}</div><div class="stat-caption">${state.expenses.length} ${t(state.expenses.length === 1 ? 'expense' : 'expensesPlural')} ${t('expensesCount')}</div></article><article class="stat-card"><div class="stat-top"><span>${paidOwedLabel}</span><span class="stat-icon ${balance < 0 ? 'coral' : ''}">${balance < 0 ? '↙' : '↗'}</span></div><div class="stat-value">${money(amount)}</div><div class="stat-caption">${t('basedOnLedger')}</div></article><article class="stat-card"><div class="stat-top"><span>${t('monthEnd')}</span><span class="stat-icon blue">⌂</span></div><div class="stat-value">${activeHouseholds().length} ${t('homes')}</div><div class="stat-caption">${state.settlements.filter(item => item.paid).length} ${t('paid').toLowerCase()} · ${t('monthToDate')}</div></article></div>
      ${categoryBreakdown()}
      <div class="content-grid"><section class="card"><div class="card-header"><div><h2>${t('recentActivity')}</h2><p>${t('monthToDate')}</p></div><button class="text-button" data-view="expenses">${t('seeAll')} →</button></div><div class="activity-list">${recentExpenses()}</div></section><div class="right-column">${settlementsCard()}${balancesCard(true)}</div></div>${assistantCard()}`;
  }
  function expensesView() {
    const filtered = [...state.expenses].sort((a, b) => b.date.localeCompare(a.date)).filter(expense => (expenseFilter === 'all' || expense.category === expenseFilter) && `${expense.title} ${contributorLabel(expense, true)}`.toLowerCase().includes(searchTerm.toLowerCase()));
    const filters = ['all', 'rent', 'groceries', 'food', 'travel', 'utilities', 'maintenance', 'cleaning', 'other'];
    return `${pageHeading(t('viewExpenses'), `${state.expenses.length} ${t(state.expenses.length === 1 ? 'expense' : 'expensesPlural')} · ${money(totalExpenses())}`, `<button class="button button-primary" data-action="add-expense"><span>＋</span>${t('addExpense')}</button>`)}<div class="view-toolbar"><div class="filter-tabs">${filters.map(filter => `<button class="filter-tab ${expenseFilter === filter ? 'active' : ''}" data-filter="${filter}">${t(filter)}</button>`).join('')}</div><label class="search-box"><span>⌕</span><input id="expense-search" type="search" value="${escapeHtml(searchTerm)}" placeholder="${t('search')}" /></label></div><section class="card"><div class="data-table-wrap"><table class="data-table"><thead><tr><th>${t('date')}</th><th>${t('description')}</th><th>${t('paidBy')}</th><th>${t('sharedBy')}</th><th>${t('amount')}</th></tr></thead><tbody>${filtered.map(expense => `<tr><td>${dateText(expense.date)}</td><td><strong>${escapeHtml(expense.title)}</strong><br><small>${t(expense.category) || t('other')}</small></td><td><small>${escapeHtml(contributorLabel(expense, true))}</small></td><td><div class="table-households">${Object.keys(expense.shares || {}).map(id => avatar(household(id))).join('')}<small>${Object.keys(expense.shares || {}).length} ${t('homes')}</small></div></td><td class="table-amount">${money(expense.amount)}</td></tr>`).join('') || `<tr><td colspan="5"><div class="empty-state">${t('noExpenses')}</div></td></tr>`}</tbody></table></div></section>${assistantCard()}`;
  }
  function roommateCard(home, former = false) {
    const balances = getBalances();
    const paid = state.expenses.reduce((sum, expense) => sum + (expenseContributions(expense)[home.id] || 0), 0);
    const share = state.expenses.reduce((sum, expense) => sum + (Number(expense.shares?.[home.id]) || 0), 0);
    const balance = balances[home.id] || 0;
    const tone = balance > .5 ? 'positive' : balance < -.5 ? 'negative' : 'neutral';
    const balanceLabel = balance > .5 ? t('netCredit') : balance < -.5 ? t('netOwes') : t('balanced');
    const action = former
      ? `<button class="button button-quiet button-small roommate-action" data-restore-roommate="${escapeHtml(home.id)}" type="button">${t('restoreRoommate')}</button>`
      : home.id === state.currentHouseholdId ? '' : `<button class="button button-quiet button-small roommate-action" data-remove-roommate="${escapeHtml(home.id)}" type="button">${t('markMovedOut')}</button>`;
    const joinedLabel = home.joinedAt ? ` · ${t('joined')} ${dateText(home.joinedAt)}` : '';
    return `<article class="card household-card ${former ? 'former-roommate-card' : ''}"><div class="household-card-top">${avatar(home)}<div><strong>${escapeHtml(home.name)}</strong><small>${escapeHtml(home.unit || t('roommateUnit'))} · ${t('flatmate')}${former ? ` · ${t('movedOut')}` : ''}${joinedLabel}</small></div>${action}</div><div class="household-members">${home.members.slice(1).map((member, i) => `<span class="avatar ${colors[(state.households.indexOf(home) + i) % colors.length]}" title="${escapeHtml(member)}">${escapeHtml(member.slice(0, 1))}</span>`).join('')}</div><div class="household-card-body"><span>${t('amountPaid')}<strong>${money(paid)}</strong></span><span>${t('shareOfCosts')}<strong>${money(share)}</strong></span></div><div class="household-card-body"><span>${t('currentBalance')}<strong class="${tone}">${balanceLabel}</strong></span><span>${t('monthToDate')}<strong class="${tone}">${balance > .5 ? '+' : balance < -.5 ? '−' : ''}${money(Math.abs(balance))}</strong></span></div></article>`;
  }
  function householdsView() {
    const active = activeHouseholds();
    const former = state.households.filter(home => home.active === false);
    const cards = active.map(home => roommateCard(home)).join('') || `<div class="empty-state">${t('noRoommatesYet')}</div>`;
    const formerCards = former.length ? `<section class="former-roommates"><div class="former-roommates-heading"><div><h2>${t('movedOut')}</h2><p>${t('movedOutHint')}</p></div></div><div class="household-card-grid">${former.map(home => roommateCard(home, true)).join('')}</div></section>` : '';
    return `${pageHeading(t('households'), `${active.length} ${t('homes')} · ${t('monthToDate')}`, `<button class="button button-primary" data-action="invite"><span>＋</span>${t('inviteRoommates')}</button>`)}<div class="household-card-grid">${cards}</div>${formerCards}<div class="view-layout" style="margin-top:14px"><div>${balancesCard()}</div><div>${settlementsCard()}</div></div>`;
  }
  function rulesView() {
    return `${pageHeading(t('rulesTitle'), t('rulesIntro'))}<div class="view-layout"><div class="rules-list"><article class="card rule-card"><span class="rule-icon">÷</span><div class="rule-copy"><strong>${t('equalTitle')}</strong><p>${t('equalDesc')}</p></div><span class="rule-tag">${t('splitEvenly')}</span></article><article class="card rule-card"><span class="rule-icon">₹</span><div class="rule-copy"><strong>${t('customTitle')}</strong><p>${t('customDesc')}</p></div><span class="rule-tag">${t('customAmounts')}</span></article><article class="card rule-card"><span class="rule-icon">✓</span><div class="rule-copy"><strong>${t('transparencyTitle')}</strong><p>${t('transparencyDesc')}</p></div><span class="rule-tag">${t('buildingExpense')}</span></article></div><aside><div class="note-card"><h3>${t('goodPractice')}</h3><p>${t('practiceBody')}</p><div class="note-bullets"><span>${t('practiceOne')}</span><span>${t('practiceTwo')}</span><span>${t('practiceThree')}</span></div></div><div class="note-card" style="margin-top:13px"><h3>${t('ledgerNote')}</h3><p>${t('ledgerNoteBody')}</p></div></aside></div>`;
  }
  function render() {
    setHeader();
    const content = document.getElementById('page-content');
    content.innerHTML = view === 'expenses' ? expensesView() : view === 'households' ? householdsView() : view === 'rules' ? rulesView() : overview();
    bindPageActions();
    updateModelChip();
  }
  function showToast(message, error = false) {
    const toast = document.getElementById('toast');
    toast.textContent = message; toast.classList.toggle('error', error); toast.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 3100);
  }
  function inviteUrl() {
    const url = new URL(window.location.href);
    if (!url.searchParams.has('invite')) url.searchParams.set('invite', state.inviteCode);
    url.hash = '';
    return url.toString();
  }
  function openInviteModal() {
    const backdrop = document.getElementById('invite-modal');
    const isInvitePreview = new URLSearchParams(window.location.search).has('invite');
    document.getElementById('invite-link').value = inviteUrl();
    document.getElementById('invite-dialog-title').textContent = t('inviteTitle');
    document.querySelector('.invite-dialog .dialog-header p').textContent = isInvitePreview ? t('joinInvite') : t('inviteIntro');
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden', 'false');
    document.getElementById('roommate-name').focus();
  }
  function closeInviteModal() {
    const backdrop = document.getElementById('invite-modal');
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
  }
  function nextRoomLabel() {
    const prefix = `${t('roommateUnit')} `;
    let number = state.households.length + 1;
    let label = `${prefix}${String(number).padStart(2, '0')}`;
    const used = new Set(state.households.map(home => (home.unit || '').trim().toLocaleLowerCase()));
    while (used.has(label.toLocaleLowerCase())) {
      number += 1;
      label = `${prefix}${String(number).padStart(2, '0')}`;
    }
    return label;
  }
  async function copyInviteLink() {
    const input = document.getElementById('invite-link');
    input.select(); input.setSelectionRange(0, input.value.length);
    try {
      await navigator.clipboard.writeText(input.value);
    } catch {
      document.execCommand('copy');
    }
    showToast(t('inviteCopied'));
  }
  async function shareInviteLink() {
    const link = document.getElementById('invite-link').value;
    if (!navigator.share) return copyInviteLink();
    try { await navigator.share({ title: 'Join my Koottu flat', text: t('inviteIntro'), url: link }); }
    catch (error) { if (error.name !== 'AbortError') copyInviteLink(); }
  }
  function addRoommate(event) {
    event.preventDefault();
    const nameInput = document.getElementById('roommate-name');
    const roomInput = document.getElementById('roommate-room');
    const name = nameInput.value.trim();
    if (!name) return;
    const room = roomInput.value.trim() || nextRoomLabel();
    const sameRoommate = home => home.name.trim().toLocaleLowerCase() === name.toLocaleLowerCase()
      && (home.unit || '').trim().toLocaleLowerCase() === room.toLocaleLowerCase();
    const existing = state.households.find(sameRoommate);
    if (existing && existing.active !== false) return showToast(t('roommateExists').replace('{name}', name).replace('{room}', room), true);
    if (existing) {
      existing.active = true; existing.activeSince = new Date().toISOString().slice(0, 10); delete existing.leftAt;
      saveState(); closeInviteModal(); render(); showToast(t('roommateRestored')); return;
    }
    const joinedAt = new Date().toISOString().slice(0, 10);
    state.households.push({ id: `r${Date.now().toString(36)}`, name, unit: room, members: [name], color: colors[state.households.length % colors.length], active: true, joinedAt, activeSince: joinedAt });
    saveState(); closeInviteModal(); render(); showToast(t('roommateAdded'));
  }
  function markRoommateMovedOut(id) {
    const home = household(id);
    if (!home || home.active === false) return;
    if (id === state.currentHouseholdId) return showToast(t('currentUserCannotLeave'), true);
    if (!window.confirm(t('confirmMovedOut').replace('{name}', home.name))) return;
    home.active = false; home.leftAt = new Date().toISOString().slice(0, 10);
    saveState(); render(); showToast(t('roommateMovedOut'));
  }
  function restoreRoommate(id) {
    const home = household(id);
    if (!home || home.active !== false) return;
    home.active = true; delete home.leftAt;
    saveState(); render(); showToast(t('roommateRestored'));
  }
  function openModal(draft = {}) {
    const form = document.getElementById('expense-form');
    form.reset();
    payerAmountsTouched = Boolean(draft.contributions && Object.keys(draft.contributions).length);
    document.getElementById('expense-title').value = draft.title || '';
    document.getElementById('expense-amount').value = draft.amount || '';
    document.getElementById('expense-category').value = draft.category || 'other';
    const active = activeHouseholds();
    const hasPayerDraft = Object.prototype.hasOwnProperty.call(draft, 'payerId');
    const presetContributions = draft.contributions && typeof draft.contributions === 'object' && Object.keys(draft.contributions).length
      ? draft.contributions
      : draft.payerId ? { [draft.payerId]: draft.amount || '' }
        : hasPayerDraft ? {} : { [state.currentHouseholdId]: draft.amount || '' };
    renderPayerInputs(active, presetContributions);
    const participantIds = Array.isArray(draft.participantIds) ? draft.participantIds.filter(id => active.some(home => home.id === id)) : active.map(home => home.id);
    document.getElementById('household-checks').innerHTML = active.map(home => `<label class="household-check"><input type="checkbox" value="${home.id}" ${participantIds.includes(home.id) ? 'checked' : ''}><span>${escapeHtml(home.name)}</span></label>`).join('') || `<div class="empty-state">${t('noRoommatesYet')}</div>`;
    const splitMethod = draft.splitMethod === 'custom' ? 'custom' : 'equal';
    document.getElementById('split-method').value = splitMethod;
    document.getElementById('custom-splits-wrap').classList.toggle('hidden', splitMethod !== 'custom');
    renderCustomInputs(draft.shares || {});
    document.getElementById('expense-modal').classList.add('open');
    document.getElementById('expense-modal').setAttribute('aria-hidden', 'false');
    updatePayerPreview();
    updateSplitPreview();
    document.getElementById('expense-title').focus();
  }
  function closeModal() {
    document.getElementById('expense-modal').classList.remove('open');
    document.getElementById('expense-modal').setAttribute('aria-hidden', 'true');
  }
  function selectedHouseholdIds() { return [...document.querySelectorAll('#household-checks input:checked')].map(input => input.value); }
  function renderPayerInputs(households, preset = {}) {
    const container = document.getElementById('payer-contributions');
    container.innerHTML = households.map(home => {
      const selected = Object.prototype.hasOwnProperty.call(preset, home.id);
      const amount = Number(preset[home.id]) > 0 ? Math.round(Number(preset[home.id])) : '';
      const checkboxId = `payer-${home.id}`;
      return `<div class="payer-contribution-row ${selected ? 'selected' : ''}"><input id="${escapeHtml(checkboxId)}" type="checkbox" data-payer-select value="${escapeHtml(home.id)}" ${selected ? 'checked' : ''}><label class="payer-name" for="${escapeHtml(checkboxId)}">${escapeHtml(home.name)}</label><div class="amount-input"><span>₹</span><input type="number" min="1" step="1" inputmode="numeric" data-payer-amount="${escapeHtml(home.id)}" value="${amount}" placeholder="0" ${selected ? '' : 'disabled'}></div></div>`;
    }).join('') || `<div class="empty-state">${t('noRoommatesYet')}</div>`;
  }
  function updatePayerPreview() {
    const container = document.getElementById('payer-contributions');
    if (!container) return;
    const total = Math.round(Number(document.getElementById('expense-amount').value) || 0);
    const selectedChecks = [...container.querySelectorAll('[data-payer-select]:checked')];
    const count = document.getElementById('payer-count');
    if (count) count.textContent = t('payerCount').replace('{count}', selectedChecks.length);
    const selected = selectedChecks.map(check => ({ id: check.value, input: check.closest('.payer-contribution-row')?.querySelector('[data-payer-amount]') }));
    selected.forEach(({ input }) => { if (input) { input.disabled = false; input.required = false; } });
    container.querySelectorAll('[data-payer-select]:not(:checked)').forEach(check => {
      const input = check.closest('.payer-contribution-row')?.querySelector('[data-payer-amount]');
      if (input) { input.disabled = true; input.required = false; }
    });
    if (!payerAmountsTouched && selected.length === 1 && selected[0].input && total > 0) selected[0].input.value = total;
    const entries = selected.map(({ id, input }) => [id, Math.round(Number(input?.value) || 0)]);
    const paid = entries.reduce((sum, [, amount]) => sum + amount, 0);
    const allAmountsPositive = entries.length > 0 && entries.every(([, amount]) => amount > 0);
    const matches = total > 0 && allAmountsPositive && paid === total;
    const details = entries.length ? entries.map(([id, amount]) => `${escapeHtml(household(id).name)} ${money(amount)}`).join(' · ') : t('payerHint');
    const summary = document.getElementById('payer-summary');
    if (summary) summary.innerHTML = `<span>${t('payerSummary').replace('{details}', details)}</span>${total > 0 && entries.length ? `<small class="contribution-status ${matches ? 'valid' : 'invalid'}">${t('payerTotal').replace('{paid}', money(paid)).replace('{total}', money(total))} · ${matches ? t('payerMatch') : t('payerMismatch')}</small>` : ''}`;
  }
  function renderCustomInputs(preset = {}) {
    const ids = selectedHouseholdIds();
    const container = document.getElementById('custom-splits');
    container.innerHTML = ids.map(id => `<label class="custom-split-row"><span>${escapeHtml(household(id).name)}</span><div class="amount-input"><span>₹</span><input type="number" min="0" step="1" value="${preset[id] ?? ''}" data-custom-share="${id}" placeholder="0"></div></label>`).join('') || `<div class="empty-state">${t('needHousehold')}</div>`;
  }
  function calculatedShares(amount, ids) {
    const rounded = Math.round(Number(amount) || 0);
    if (!ids.length || rounded <= 0) return {};
    const each = Math.floor(rounded / ids.length), remainder = rounded % ids.length;
    return Object.fromEntries(ids.map((id, index) => [id, each + (index < remainder ? 1 : 0)]));
  }
  function updateSplitPreview() {
    if (!document.getElementById('split-preview')) return;
    const amount = Number(document.getElementById('expense-amount').value);
    const ids = selectedHouseholdIds();
    const count = document.getElementById('split-count');
    if (count) count.textContent = t('splitCount').replace('{count}', ids.length);
    const method = document.getElementById('split-method').value;
    const preview = document.getElementById('split-preview');
    if (!amount || !ids.length) { preview.innerHTML = `<span class="preview-icon">✳</span><span>${t('previewHint')}</span>`; return; }
    const shares = method === 'equal' ? calculatedShares(amount, ids) : Object.fromEntries([...document.querySelectorAll('[data-custom-share]')].map(input => [input.dataset.customShare, Number(input.value) || 0]));
    const sum = Object.values(shares).reduce((total, value) => total + value, 0);
    const display = Object.entries(shares).map(([id, value]) => `<strong>${escapeHtml(household(id).name)}: ${money(value)}</strong>`).join(' · ');
    const valid = method !== 'custom' || sum === Math.round(amount);
    const summary = (method === 'custom' ? t('customSplitPreview') : t('equalSplitPreview')).replace('{total}', money(Math.round(amount))).replace('{count}', ids.length);
    const remainder = method === 'equal' ? Math.round(amount) % ids.length : 0;
    const remainderNames = ids.slice(0, remainder).map(id => escapeHtml(household(id).name)).join(', ');
    const remainderNote = remainder ? `<small class="split-remainder">${t('splitRemainder').replace('{amount}', remainder).replace('{names}', remainderNames)}</small>` : '';
    const totalNote = method === 'custom' ? `<small class="split-total">${sum === Math.round(amount) ? '✓' : `${t('amount')}: ${money(sum)} / ${money(amount)}`}</small>` : '';
    preview.innerHTML = `<span class="preview-icon">${valid ? '✳' : '!'}</span><span class="split-preview-copy"><span>${summary} ${display}</span>${remainderNote}${totalNote}</span>`;
  }
  function saveExpense(event) {
    event.preventDefault();
    const title = document.getElementById('expense-title').value.trim();
    const amount = Math.round(Number(document.getElementById('expense-amount').value));
    const participantIds = selectedHouseholdIds();
    const splitMethod = document.getElementById('split-method').value;
    const selectedPayers = [...document.querySelectorAll('#payer-contributions [data-payer-select]:checked')];
    if (!participantIds.length) return showToast(t('needHousehold'), true);
    if (!Number.isFinite(amount) || amount <= 0) return showToast(t('amountRequired'), true);
    if (!selectedPayers.length) return showToast(t('payerRequired'), true);
    const contributions = Object.fromEntries(selectedPayers.map(check => [check.value, Math.round(Number(check.closest('.payer-contribution-row')?.querySelector('[data-payer-amount]')?.value) || 0)]));
    if (Object.values(contributions).some(value => value <= 0)) return showToast(t('payerAmountRequired'), true);
    if (Object.values(contributions).reduce((sum, value) => sum + value, 0) !== amount) return showToast(t('payerMismatch'), true);
    let shares = splitMethod === 'equal' ? calculatedShares(amount, participantIds) : Object.fromEntries([...document.querySelectorAll('[data-custom-share]')].map(input => [input.dataset.customShare, Math.round(Number(input.value) || 0)]));
    const sum = Object.values(shares).reduce((total, value) => total + value, 0);
    if (sum !== amount) return showToast(t('amountMismatch'), true);
    state.expenses.unshift({ id: `e${Date.now()}`, title, amount, category: document.getElementById('expense-category').value, payerId: selectedPayers[0].value, contributions, shares, date: new Date().toISOString().slice(0, 10), splitMethod });
    saveState(); closeModal(); render(); showToast(t('expenseSaved'));
  }
  function markSettlement(button) {
    const id = button.dataset.settle;
    const current = state.settlements.find(item => item.id === id);
    if (current) current.paid = true;
    else state.settlements.push({ id: `s${Date.now()}`, month: monthLabel, from: button.dataset.from, to: button.dataset.to, amount: Number(button.dataset.amount), paid: true, date: new Date().toISOString().slice(0, 10) });
    saveState(); render(); showToast(t('markedPaid'));
  }
  function bindPageActions() {
    document.querySelectorAll('[data-action="add-expense"]').forEach(button => button.addEventListener('click', () => openModal()));
    document.querySelectorAll('[data-action="invite"]').forEach(button => button.addEventListener('click', openInviteModal));
    document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => { view = button.dataset.view; render(); }));
    document.querySelectorAll('[data-settle]').forEach(button => button.addEventListener('click', () => markSettlement(button)));
    document.querySelectorAll('[data-remove-roommate]').forEach(button => button.addEventListener('click', () => markRoommateMovedOut(button.dataset.removeRoommate)));
    document.querySelectorAll('[data-restore-roommate]').forEach(button => button.addEventListener('click', () => restoreRoommate(button.dataset.restoreRoommate)));
    document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => { expenseFilter = button.dataset.filter; view = 'expenses'; render(); }));
    const search = document.getElementById('expense-search');
    if (search) search.addEventListener('input', event => { searchTerm = event.target.value; const caret = event.target.selectionStart; render(); const next = document.getElementById('expense-search'); next.focus(); next.setSelectionRange(caret, caret); });
    document.querySelectorAll('[data-prompt]').forEach(button => button.addEventListener('click', () => { const input = document.getElementById('assistant-input'); if (!input) return; input.value = button.dataset.prompt; submitAssistant(); }));
    const assistantForm = document.getElementById('assistant-form');
    if (assistantForm) assistantForm.addEventListener('submit', event => { event.preventDefault(); submitAssistant(); });
    const receiptButton = document.getElementById('receipt-button');
    if (receiptButton) receiptButton.addEventListener('click', () => document.getElementById('receipt-input').click());
    const voiceButton = document.getElementById('voice-button');
    if (voiceButton) voiceButton.addEventListener('click', startVoiceInput);
    const readAloudButton = document.getElementById('read-aloud-button');
    if (readAloudButton) readAloudButton.addEventListener('click', () => {
      if (!lastAssistantReply) return showToast(t('noReplyToRead'));
      speak(lastAssistantReply);
    });
  }
  function appendMessage(text, role = 'assistant', error = false, extra = '') {
    const history = document.getElementById('chat-history');
    if (!history) return;
    const node = document.createElement('div'); node.className = `chat-message ${role === 'user' ? 'user' : ''}`;
    const safe = escapeHtml(text).replace(/\n/g, '<br>');
    node.innerHTML = `${role === 'user' ? '' : '<span class="chat-avatar">✳</span>'}<div class="chat-bubble ${error ? 'error' : ''}">${safe}${extra}</div>`;
    history.appendChild(node); history.scrollTop = history.scrollHeight;
    if (role !== 'user' && !error && !/^(just a sec|one moment|ഒരു നിമിഷം)/i.test(text)) lastAssistantReply = text;
    if (role !== 'user' && !error) {
      const speakButton = document.createElement('button');
      speakButton.className = 'message-speak'; speakButton.type = 'button'; speakButton.title = t('speakReply'); speakButton.setAttribute('aria-label', t('speakReply')); speakButton.textContent = '🔊';
      speakButton.addEventListener('click', () => speak(text));
      node.querySelector('.chat-bubble')?.appendChild(speakButton);
    }
    return node;
  }
  function receiptMessageMarkup(receipt) {
    if (!receipt || !['image/png', 'image/jpeg', 'image/webp'].includes(receipt.mimeType) || !/^[A-Za-z0-9+/=]+$/.test(receipt.data || '')) return '';
    const filename = escapeHtml(receipt.name || 'Receipt');
    return `<img class="chat-receipt-sent" src="data:${receipt.mimeType};base64,${receipt.data}" alt="Receipt image sent"><span class="chat-receipt-label">${filename}</span>`;
  }
  function parseLocalAmount(text) {
    const explicitTotal = text.match(/(?:total(?:\s+amount)?|bill(?:\s+total|\s+amount)?|expense total)\s*(?:is|was|of|:)?\s*(?:₹\s*|rs\.?\s*|inr\s*)?([\d,]+(?:\.\d{1,2})?)/i);
    if (explicitTotal) return Math.round(Number(explicitTotal[1].replace(/,/g, '')));
    const contributions = extractLocalContributions(text);
    if (Object.keys(contributions).length) return Object.values(contributions).reduce((sum, amount) => sum + amount, 0);
    const explicitExpense = /\b(paid|spent|contributed|covered|put in|bought|purchased|purchase|add|added|log|record|recorded|expense)\b|കൊടുത്തു|ചെലവാക്കി|വാങ്ങി|ചേർക്കൂ|രേഖപ്പെടുത്തൂ/i.test(text);
    const match = text.match(/(?:₹|rs\.?\s*|inr\s*)([\d,]+(?:\.\d{1,2})?)/i)
      || text.match(/([\d,]+(?:\.\d{1,2})?)\s*(?:rupees|rs\.?)(?![a-z])/i)
      || (explicitExpense ? text.match(/\b([\d,]+(?:\.\d{1,2})?)\b/) : null);
    return match ? Math.round(Number(match[1].replace(/,/g, ''))) : 0;
  }
  function extractLocalContributions(text, roommates = activeHouseholds()) {
    const contributions = {};
    const lowered = text.toLowerCase();
    for (const home of [...roommates].sort((a, b) => String(b.name).length - String(a.name).length)) {
      if (!home.name) continue;
      const aliases = [home.name, home.name.replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '').trim()].filter(Boolean);
      const alias = aliases.find(value => lowered.includes(value.toLowerCase()));
      if (!alias) continue;
      const index = lowered.indexOf(alias.toLowerCase());
      if (index < 0 || (index > 0 && /[a-z0-9]/i.test(lowered[index - 1]))) continue;
      const end = index + alias.length;
      if (end < lowered.length && /[a-z0-9]/i.test(lowered[end])) continue;
      const afterName = text.slice(end, end + 90).match(/^\s*(?:paid|spent|contributed|gave|put in)\s*(?:around|about)?\s*(?:₹\s*|rs\.?\s*|inr\s*)?([\d,]+(?:\.\d{1,2})?)/i);
      const beforeName = text.slice(Math.max(0, index - 60), index).match(/(?:₹\s*|rs\.?\s*|inr\s*)?([\d,]+(?:\.\d{1,2})?)\s*(?:rupees?\s*)?(?:paid\s+by|from|by)\s*$/i);
      const match = afterName || beforeName;
      const value = match ? Math.round(Number(match[1].replace(/,/g, ''))) : 0;
      if (value > 0) contributions[home.id] = value;
    }
    const currentUser = roommates.find(home => home.id === state.currentHouseholdId);
    const selfPaid = text.match(/\bI\s+(?:paid|spent|contributed|covered)\s*(?:around|about)?\s*(?:₹\s*|rs\.?\s*|inr\s*)?([\d,]+(?:\.\d{1,2})?)/i)
      || text.match(/ഞാൻ\s*(?:₹\s*|rs\.?\s*|inr\s*)?([\d,]+(?:\.\d{1,2})?)\s*(?:രൂപ\s*)?(?:കൊടുത്തു|ചെലവാക്കി)/i);
    if (currentUser && selfPaid && !contributions[currentUser.id]) contributions[currentUser.id] = Math.round(Number(selfPaid[1].replace(/,/g, '')));
    return contributions;
  }
  function inferCategory(text) {
    if (/\brent\b|house rent|വാടക/i.test(text)) return 'rent';
    if (/\btrip|travel|petrol|fuel|taxi|cab|uber|bus ticket|യാത്ര|ട്രിപ്പ്|പെട്രോൾ/i.test(text)) return 'travel';
    if (/\bmeal|lunch|dinner|breakfast|restaurant|food|ഭക്ഷണം|ഉച്ചഭക്ഷണം|രാത്രിഭക്ഷണം/i.test(text)) return 'food';
    if (/grocery|groceries|shopping|പലചരക്ക്|സാധനങ്ങൾ/i.test(text)) return 'groceries';
    if (/electric|electricity|water|wifi|internet|utility|utilities|കരണ്ട്|വൈദ്യുതി|വെള്ളം|ഇന്റർനെറ്റ്/i.test(text)) return 'utilities';
    if (/repair|maintenance|അറ്റകുറ്റപ്പണി/i.test(text)) return 'maintenance';
    if (/clean|cleaning|ക്ലീനിംഗ്|വൃത്തിയാക്കൽ/i.test(text)) return 'cleaning';
    return 'other';
  }
  function detectChatLanguage(text) {
    if (/[\u0D00-\u0D7F]/u.test(text)) return 'ml';
    if (/\b(?:in Malayalam|Malayalam please|say .* Malayalam)\b/i.test(text)) return 'ml';
    const romanizedMalayalam = /\b(?:sugamano|sukhamano|sukhamaano|sughamano|entha|engane|evide|aaru|aano|aanu|alle|allello|njan|njangal|ningal|ente|ellarkkum|ellavarkkum|koduthu|thannu|vaangi|cheythu|cheyyu|venam|venda|paisa|kaashu|chelav|parayu|parayoo|sheri|nanni|saramilla|pinne|oru|ithu|athu)\b/i;
    return romanizedMalayalam.test(text) ? 'ml' : 'en';
  }
  function spendingRoastAnswer(chatLanguage = 'en') {
    const words = translations[chatLanguage] || translations.en;
    const monthKey = new Date().toISOString().slice(0, 7);
    const expenses = state.expenses.filter(expense => String(expense.date || '').startsWith(monthKey));
    if (!expenses.length) return words.emptySpendingRoast;
    const total = expenses.reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0);
    const categoryTotals = {};
    expenses.forEach(expense => { const category = expense.category || 'other'; categoryTotals[category] = (categoryTotals[category] || 0) + (Number(expense.amount) || 0); });
    const topCategory = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1])[0]?.[0] || 'other';
    return words.spendingRoast.replace('{total}', money(total)).replace('{category}', words[topCategory] || words.other);
  }
  function ledgerAnswer(text, chatLanguage = 'en') {
    const lower = text.toLowerCase();
    const balances = getBalances();
    const settlements = makeSettlements(balances);
    if (/roast|spending|കളിയാക്കി/i.test(lower)) return spendingRoastAnswer(chatLanguage);
    if (/who owes|owe whom|who should|settle|ആരാണ്|ആർക്കു|കണക്ക്|balance|ബാലൻസ്/.test(lower)) {
      if (!settlements.length) return chatLanguage === 'ml' ? 'എല്ലാവരുടെയും കണക്ക് ഇപ്പോൾ ക്ലിയറാണ്. പിരിവിന് ആരെയും പിന്നാലെ നടക്കേണ്ട!' : t('noSettlements');
      const intro = chatLanguage === 'ml' ? 'ഇപ്പോഴത്തെ കണക്കുപ്രകാരം:' : t('explainSettlements');
      return `${intro}\n${settlements.map(item => `${household(item.from).name} → ${household(item.to).name}: ${money(item.amount)}`).join('\n')}`;
    }
    if (/help|how|സഹായം|എങ്ങനെ/.test(lower)) return chatLanguage === 'ml' ? 'ചെലവ് പറഞ്ഞാൽ ഞാൻ ഡ്രാഫ്റ്റ് തയ്യാറാക്കാം; ആരാണ് പണം കൊടുത്തത്, ആരൊക്കെ പങ്കിടും എന്ന് കൂടി പറയൂ.' : t('noApiAnswer');
    return '';
  }
  function localExpenseDraft(text, chatLanguage = 'en') {
    const repaymentWords = /\b(?:repaid|paid\s+back|sent|transferred|settled\s+up|settlement)\b|\b(?:half|portion|part)\b.{0,60}\b(?:share|owe|owed|balance|debt)\b|\b(?:share|owe|owed|balance|debt)\b.{0,60}\b(?:half|portion|part)\b/i.test(text);
    const namesRoommates = state.households.some(home => home.name && text.toLowerCase().includes(home.name.toLowerCase()));
    const paidToRoommate = /\b(?:paid|gave)\b.{0,80}\bto\b/i.test(text) && namesRoommates;
    if (repaymentWords || paidToRoommate) return null;
    const contributions = extractLocalContributions(text);
    const amount = parseLocalAmount(text);
    const action = /\b(paid|spent|contributed|covered|put in|bought|purchased|purchase|add|added|log|record|recorded|expense)\b|കൊടുത്തു|ചെലവാക്കി|വാങ്ങി|ചേർക്കൂ|രേഖപ്പെടുത്തൂ/i.test(text);
    if (!amount || !action) return null;
    const lower = text.toLowerCase();
    const category = inferCategory(text);
    const active = activeHouseholds();
    const firstPersonPaid = /\b(?:i|we)\s+(?:paid|spent|bought|covered)\b|ഞാൻ\s*(?:പണം\s*)?(?:കൊടുത്തു|ചെലവാക്കി)/i.test(text);
    const namedPayer = active.find(home => {
      const aliases = [home.name, home.name.replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '').trim(), home.unit].filter(value => value && value.length > 2);
      return aliases.some(alias => {
        const index = lower.indexOf(alias.toLowerCase());
        if (index < 0) return false;
        const before = lower.slice(Math.max(0, index - 24), index);
        const after = lower.slice(index + alias.length, index + alias.length + 60);
        return /^\s*(?:paid|spent|contributed|gave|covered)\b/i.test(after) || /\b(?:paid\s+by|from)\s*$/i.test(before);
      });
    });
    const payer = active.find(home => contributions[home.id] > 0) || namedPayer || (firstPersonPaid ? currentHousehold() : null);
    if (!Object.keys(contributions).length && payer) contributions[payer.id] = amount;
    const allRoommates = /\b(all(?: the)?\s+(?:roommates|members)|everyone|shared by all|among all)\b|എല്ലാവർക്കും|എല്ലാവർക്കായും|എല്ലാവരും/i.test(text);
    const participantIds = allRoommates ? active.map(home => home.id) : [];
    const clarification = [];
    if (!payer) clarification.push(chatLanguage === 'ml' ? 'ആരാണ് പണം കൊടുത്തത്?' : 'Who paid this?');
    if (!participantIds.length) clarification.push(chatLanguage === 'ml' ? 'ആരൊക്കെയാണ് ഇത് പങ്കിടുന്നത്?' : 'Who should share it?');
    return { title: translations[chatLanguage]?.[category] || t(category) || t('buildingExpense'), amount, category, payerId: payer?.id || null, contributions, participantIds, splitMethod: 'equal', shares: {}, clarifyingQuestion: clarification.join(' ') || null };
  }
  function showExpenseDraft(draft, local = false, clarifyingQuestion = null, chatLanguage = 'en') {
    const words = translations[chatLanguage] || translations.en;
    const draftContributions = draft.contributions && Object.keys(draft.contributions).length ? draft.contributions : draft.payerId ? { [draft.payerId]: draft.amount } : {};
    const contributors = Object.entries(draftContributions);
    const payerText = contributors.length ? contributors.map(([id, amount]) => `${household(id).name} ${money(amount)}`).join(' + ') : words.payerMissing;
    const participants = (draft.participantIds || []).filter(id => activeHouseholds().some(home => home.id === id));
    const shareMap = draft.splitMethod === 'custom' && draft.shares && Object.keys(draft.shares).length
      ? draft.shares : calculatedShares(draft.amount, participants);
    const shareText = Object.entries(shareMap).map(([id, amount]) => `${household(id).name} ${money(amount)}`).join(' · ') || words.participantsMissing;
    const question = clarifyingQuestion ? `\n${clarifyingQuestion}` : '';
    const label = words[local ? 'localDraft' : 'draftTitle'];
    const node = appendMessage(`${label}: ${draft.title} · ${money(draft.amount)}\n${words.draftPayers}: ${payerText}\n${words.draftShares}: ${shareText}${question}\n${words.draftNote}`, 'assistant', false, `<button class="button button-outline-green button-small draft-open" type="button">${words.useDraft}</button>`);
    node?.querySelector('.draft-open')?.addEventListener('click', () => openModal(draft));
  }
  function showSettlementDraft(draft, chatLanguage = 'en') {
    const from = household(draft.fromId), to = household(draft.toId);
    const remaining = Math.max(0, draft.outstanding - draft.amount);
    const details = chatLanguage === 'ml'
      ? `പേയ്മെന്റ് ഡ്രാഫ്റ്റ്: ${from.name} ${money(draft.amount)} ${to.name}-ക്ക് നൽകി.\nമുമ്പ് ബാക്കി: ${money(draft.outstanding)} · ഇത് ചേർത്താൽ ബാക്കി: ${money(remaining)}.\nസ്ഥിരീകരിക്കുന്നതിന് മുമ്പ് തുക പരിശോധിക്കൂ.`
      : `${t('paymentDraftTitle')}: ${from.name} paid ${money(draft.amount)} to ${to.name}.\nOutstanding before: ${money(draft.outstanding)} · remaining after: ${money(remaining)}.\n${t('paymentDraftHint')}`;
    const node = appendMessage([draft.response, details].filter(Boolean).join('\n'), 'assistant', false, `<button class="button button-outline-green button-small settlement-confirm" type="button">${t('confirmPayment')}</button> <button class="button button-quiet button-small settlement-cancel" type="button">${t('cancel')}</button>`);
    node?.querySelector('.settlement-confirm')?.addEventListener('click', () => confirmSettlementDraft(draft, node, chatLanguage));
    node?.querySelector('.settlement-cancel')?.addEventListener('click', () => node.remove());
  }
  function confirmSettlementDraft(draft, node, chatLanguage = 'en') {
    const current = makeSettlements().find(item => item.from === draft.fromId && item.to === draft.toId);
    if (!current || current.amount !== draft.outstanding) {
      node?.remove();
      return showToast(t('paymentOutdated'), true);
    }
    if (draft.amount > current.amount) {
      node?.remove();
      return showToast(t('paymentTooLarge'), true);
    }
    state.settlements.push({ id: `s${Date.now()}`, month: monthLabel, from: draft.fromId, to: draft.toId, amount: draft.amount, paid: true, date: new Date().toISOString().slice(0, 10) });
    const remaining = Math.max(0, current.amount - draft.amount);
    saveState(); render(); showToast(chatLanguage === 'ml' ? `പേയ്മെന്റ് രേഖപ്പെടുത്തി. ഇനി ബാക്കി: ${money(remaining)}.` : `${t('paymentRecorded')} ${money(remaining)}.`);
  }
  async function submitAssistant() {
    const input = document.getElementById('assistant-input');
    const text = input?.value.trim() || '';
    if (!text && !selectedReceipt) return;
    const receiptToSend = selectedReceipt;
    if (text || receiptToSend) appendMessage(text || (detectChatLanguage(text) === 'ml' ? 'രസീത് അയച്ചു' : 'Receipt attached'), 'user', false, receiptMessageMarkup(receiptToSend));
    const chatLanguage = detectChatLanguage(text);
    const isGreeting = !selectedReceipt && /^(hi|hello|hey|how are you|what'?s up|good morning|good afternoon|good evening|ഹായ്|ഹലോ|സുഖമാണോ|എങ്ങനെയുണ്ട്|എന്തൊക്കെയുണ്ട്|എന്താണ് വിശേഷം|sugamano|sukhamano|sukhamaano|sughamano|sukham ano|sugham ano|engane undu|entha vishesham)[!?.\s]*$/i.test(text);
    const expenseIntent = /\b(add|paid|spent|contributed|covered|put in|bought|purchased|log|record|expense)\b|ചേർക്കൂ|കൊടുത്തു|ചെലവാക്കി|വാങ്ങി|രേഖപ്പെടുത്തൂ/i.test(text);
    const answer = ledgerAnswer(text, chatLanguage);
    const localAnswer = answer && !selectedReceipt && !expenseIntent ? answer : isGreeting
      ? (chatLanguage === 'ml'
        ? 'സുഖം തന്നെ! നീയോ? ഫ്ലാറ്റിലെ ചെലവ് ചേർക്കണോ, അതോ ആരാണ് ആർക്കു കൊടുക്കാനുള്ളതെന്ന് നോക്കണോ?'
        : 'Hey! Want to add an expense or check who owes whom?')
      : '';
    const deterministicAnswer = Boolean(localAnswer && !selectedReceipt && !expenseIntent);
    input.value = '';
    const chatNode = appendMessage(chatLanguage === 'ml' ? 'ഒരു നിമിഷം…' : (gemmaStatusChecked ? 'Just a sec…' : t('assistantChecking')));
    const bubble = chatNode?.querySelector('.chat-bubble');
    if (!gemmaStatusChecked && !localAnswer) await checkGemma();
    if (!geminiConfigured && !gemmaConnected) {
      chatNode?.remove();
      if (localAnswer) { appendMessage(localAnswer); return; }
      if (selectedReceipt) { appendMessage(t('aiUnavailable'), 'assistant', true); return; }
      const draft = localExpenseDraft(text, chatLanguage);
      if (draft) showExpenseDraft(draft, true, draft.clarifyingQuestion, chatLanguage);
      else appendMessage(t('aiUnavailable'), 'assistant', true);
      return;
    }
    if (bubble) bubble.textContent = chatLanguage === 'ml' ? 'ഒരു നിമിഷം…' : 'Just a sec…';
    try {
      const balances = getBalances();
      const monthKey = new Date().toISOString().slice(0, 7);
      const monthExpenses = state.expenses.filter(expense => String(expense.date || '').startsWith(monthKey));
      const categoryTotals = {};
      monthExpenses.forEach(expense => { categoryTotals[expense.category || 'other'] = (categoryTotals[expense.category || 'other'] || 0) + (Number(expense.amount) || 0); });
      const payload = {
        text,
        language: chatLanguage,
        currentUserId: state.currentHouseholdId,
        households: activeHouseholds().map(({ id, name, unit }) => ({ id, name, unit })),
        localBalances: balances,
        settlementSuggestions: makeSettlements(balances).map(({ from, to, amount }) => ({ fromId: from, from: household(from).name, toId: to, to: household(to).name, amount })),
        monthlySpending: { month: monthKey, total: monthExpenses.reduce((sum, expense) => sum + (Number(expense.amount) || 0), 0), expenseCount: monthExpenses.length, byCategory: categoryTotals },
        recentExpenses: state.expenses.slice(-30).reverse().map(expense => ({ title: expense.title, amount: expense.amount, category: expense.category, payerName: contributorLabel(expense), contributions: expenseContributions(expense), shares: expense.shares, date: expense.date })),
        receipt: receiptToSend ? { mimeType: receiptToSend.mimeType, data: receiptToSend.data } : null
      };
      const response = await fetch('/api/parse-expense', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || t('assistantError'));
      if (bubble) bubble.remove();
      if (deterministicAnswer) appendMessage(localAnswer);
      else if (result.kind === 'settlement') {
        if (state.households.some(home => home.id === result.fromId) && state.households.some(home => home.id === result.toId) && Number(result.amount) > 0 && Number(result.outstanding) >= Number(result.amount)) {
          showSettlementDraft({ fromId: result.fromId, toId: result.toId, amount: Math.round(result.amount), outstanding: Math.round(result.outstanding), response: result.response || null }, chatLanguage);
        } else appendMessage(chatLanguage === 'ml' ? 'ആ പേയ്മെന്റ് ഇപ്പോഴത്തെ ബാക്കി തുകയുമായി പൊരുത്തപ്പെടുന്നില്ല. ആരാണ് ആർക്കു എത്ര കൊടുത്തതെന്ന് പറയാമോ?' : 'I could not verify that payment against the current balance. Please say who paid whom and how much.');
      }
      else if (result.kind === 'answer') {
        const fallbackDraft = expenseIntent && !receiptToSend ? localExpenseDraft(text, chatLanguage) : null;
        if (fallbackDraft) showExpenseDraft(fallbackDraft, true, fallbackDraft.clarifyingQuestion, chatLanguage);
        else {
          const responseText = result.response || localAnswer || t('noApiAnswer');
          appendMessage(receiptToSend
            ? `${responseText}\n${chatLanguage === 'ml' ? 'രസീത് ഇപ്പോഴും ചേർത്തിട്ടുണ്ട്; തുക കിട്ടിയില്ലെങ്കിൽ വ്യക്തമായ ചിത്രം വീണ്ടും ശ്രമിക്കാം, അല്ലെങ്കിൽ തുക ടൈപ്പ് ചെയ്യൂ.' : 'The receipt is still attached. If I could not read the total, try a clearer photo or type the amount.'}`
            : responseText);
        }
      }
      else if (result.amount > 0) {
        if (result.response) appendMessage(result.response);
        const participants = (result.participantIds || []).filter(id => activeHouseholds().some(home => home.id === id));
        const contributions = result.contributions && typeof result.contributions === 'object' ? Object.fromEntries(Object.entries(result.contributions).filter(([id, value]) => activeHouseholds().some(home => home.id === id) && Number(value) > 0)) : {};
        const draft = { title: result.title || t('buildingExpense'), amount: Math.round(result.amount), category: result.category || 'other', payerId: activeHouseholds().some(home => home.id === result.payerId) ? result.payerId : null, contributions, participantIds: participants, splitMethod: result.splitMethod === 'custom' ? 'custom' : 'equal', shares: result.shares || {} };
        showExpenseDraft(draft, Boolean(result.localFallback), result.clarifyingQuestion, chatLanguage);
      } else if (receiptToSend) appendMessage(chatLanguage === 'ml'
        ? 'രസീതിൽ നിന്ന് അടയ്ക്കേണ്ട തുക വ്യക്തമായി കണ്ടെത്താനായില്ല. മുഴുവൻ രസീതും വ്യക്തമായി കാണുന്ന ചിത്രം അയക്കൂ, അല്ലെങ്കിൽ തുക ടൈപ്പ് ചെയ്യൂ. ചിത്രം വീണ്ടും ശ്രമിക്കാൻ ഇപ്പോഴും ചേർത്തിട്ടുണ്ട്.'
        : 'I could not find a clear payable total in that receipt. Try a clear photo of the full receipt, or type the total. The image is still attached for another try.');
      else if (expenseIntent) {
        const fallbackDraft = localExpenseDraft(text, chatLanguage);
        if (fallbackDraft) showExpenseDraft(fallbackDraft, true, fallbackDraft.clarifyingQuestion, chatLanguage);
        else appendMessage(result.response || result.clarifyingQuestion || t('assistantError'));
      }
      else appendMessage(result.response || result.clarifyingQuestion || localAnswer || (chatLanguage === 'ml'
          ? 'അത് വ്യക്തമായില്ല, മറ്റൊരു രീതിയിൽ പറയാമോ? ചെലവാണെങ്കിൽ തുകയും എന്തിനാണെന്നും പറയൂ.'
          : 'I didn’t quite catch that. Rephrase it, or include an amount if you’re adding an expense.'));
      if (!receiptToSend || Number(result.amount) > 0) clearReceipt();
    } catch (error) {
      const localDraft = receiptToSend ? null : localExpenseDraft(text, chatLanguage);
      if (localDraft) {
        if (bubble) bubble.remove();
        showExpenseDraft(localDraft, true, localDraft.clarifyingQuestion, chatLanguage);
      } else if (localAnswer) {
        if (bubble) bubble.remove();
        appendMessage(localAnswer);
      } else if (bubble) {
        bubble.textContent = receiptToSend && /unclear|incomplete/i.test(error.message || '')
          ? (chatLanguage === 'ml'
            ? 'രസീത് ലഭിച്ചു, പക്ഷേ ആകെ തുക വ്യക്തമായി വായിക്കാനായില്ല. മുഴുവൻ ബിൽ വ്യക്തമായി കാണുന്ന ഫോട്ടോ വീണ്ടും അയക്കൂ, അല്ലെങ്കിൽ തുക ടൈപ്പ് ചെയ്യൂ. രസീത് ഇവിടെ തന്നെ ഉണ്ട്; വീണ്ടും ശ്രമിക്കാം.'
            : 'I received the receipt, but could not read a reliable total. Try a clear photo of the full bill, or type the total. The image is still attached so you can retry.')
          : error.message || (chatLanguage === 'ml'
          ? 'ഇപ്പോൾ കൃത്യമായ മറുപടി കിട്ടിയില്ല. ഒന്ന് കൂടി പറയാമോ? Gemma കണക്ഷനും പരിശോധിക്കൂ.'
          : 'Koottu could not get a clear reply just now. Please try again or check the Gemma connection.');
        bubble.classList.add('error');
      }
    }
  }
  function stopSpeechOutput() {
    window.speechSynthesis?.cancel();
    speechAbortController?.abort();
    speechAbortController = null;
    if (speechAudio) {
      speechAudio.pause();
      speechAudio = null;
    }
    if (speechAudioUrl) {
      URL.revokeObjectURL(speechAudioUrl);
      speechAudioUrl = '';
    }
  }
  async function speak(text) {
    const replyLanguage = detectChatLanguage(text);
    stopSpeechOutput();
    const controller = new AbortController();
    speechAbortController = controller;
    showToast(t('speechGenerating'));
    try {
      const response = await fetch('/api/speak', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }), signal: controller.signal
      });
      if (!response.ok) {
        const result = await response.json().catch(() => ({}));
        throw new Error(result.error || t('speechFailed'));
      }
      const audioUrl = URL.createObjectURL(await response.blob());
      if (controller.signal.aborted) { URL.revokeObjectURL(audioUrl); return; }
      speechAudioUrl = audioUrl;
      const audio = new Audio(audioUrl);
      speechAudio = audio;
      const cleanup = () => {
        if (speechAudio !== audio) return;
        speechAudio = null;
        if (speechAudioUrl === audioUrl) speechAudioUrl = '';
        URL.revokeObjectURL(audioUrl);
      };
      audio.onended = cleanup;
      audio.onerror = cleanup;
      await audio.play();
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
      if (speechAudio) { speechAudio.pause(); speechAudio = null; }
      if (speechAudioUrl) { URL.revokeObjectURL(speechAudioUrl); speechAudioUrl = ''; }
      // Keep English replies speakable on devices where native browser speech is available.
      // Malayalam uses Gemini TTS first because device voice packs vary by operating system.
      const synth = window.speechSynthesis;
      if (synth && window.SpeechSynthesisUtterance) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voiceLanguage = replyLanguage === 'ml' ? 'ml-IN' : 'en-IN';
        utterance.lang = voiceLanguage;
        const voices = synth.getVoices();
        const prefix = replyLanguage === 'ml' ? 'ml' : 'en';
        const matchingVoice = voices.find(voice => voice.lang.toLowerCase() === voiceLanguage.toLowerCase())
          || voices.find(voice => voice.lang.toLowerCase().startsWith(`${prefix}-`))
          || voices.find(voice => voice.lang.toLowerCase().startsWith('en-'));
        if (matchingVoice) utterance.voice = matchingVoice;
        utterance.onerror = () => showToast(t('speechFailed'), true);
        synth.resume();
        synth.speak(utterance);
        if (speechAbortController === controller) speechAbortController = null;
        return;
      }
      showToast(error.message || t('speechFailed'), true);
    } finally {
      if (speechAbortController === controller) speechAbortController = null;
    }
  }
  function resetVoiceButton() {
    const button = document.getElementById('voice-button');
    if (!button) return;
    button.classList.remove('recording');
    button.disabled = false;
    button.textContent = '🎙';
    button.title = t('voiceInput');
    button.setAttribute('aria-label', t('voiceInput'));
    button.setAttribute('aria-pressed', 'false');
  }
  function startVoiceInput() {
    if (voiceStarting || voiceTranscribing) return;
    if (browserRecognition) { browserRecognition.stop(); return; }
    if (voiceRecorder?.state === 'recording') { voiceRecorder.stop(); return; }
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (Recognition && !browserVoiceFailed) { startBrowserVoice(Recognition); return; }
    recordVoiceForTranscription();
  }
  function startBrowserVoice(Recognition) {
    const input = document.getElementById('assistant-input');
    const button = document.getElementById('voice-button');
    if (!input || !button) return;
    let recognition;
    try { recognition = new Recognition(); }
    catch { browserVoiceFailed = true; recordVoiceForTranscription(); return; }
    browserRecognition = recognition;
    recognition.lang = document.getElementById('voice-language')?.value || 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = true;
    const original = input.value.trim();
    let transcript = '';
    let failed = false;
    recognition.onstart = () => {
      button.classList.add('recording');
      button.textContent = '■';
      button.title = t('voiceStop');
      button.setAttribute('aria-label', t('voiceStop'));
      button.setAttribute('aria-pressed', 'true');
      showToast('Listening with browser speech. Tap the microphone to stop.');
      voiceStopTimer = setTimeout(() => recognition.stop(), 30000);
    };
    recognition.onresult = event => {
      transcript = Array.from(event.results, result => result[0].transcript).join(' ').trim();
      input.value = [original, transcript].filter(Boolean).join(' ');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    recognition.onerror = event => {
      failed = true;
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        showToast(t('voicePermission'), true);
      } else if (event.error === 'no-speech') {
        showToast('No speech heard. Tap the microphone and try again.', true);
      } else if (event.error !== 'aborted') {
        browserVoiceFailed = true;
        showToast('Browser speech could not connect. Tap the microphone again to try cloud transcription, or type your message.', true);
      }
    };
    recognition.onend = () => {
      clearTimeout(voiceStopTimer);
      if (browserRecognition === recognition) browserRecognition = null;
      resetVoiceButton();
      if (transcript) { input.focus(); showToast(t('voiceReady')); }
      else if (!failed) showToast('No speech heard. Tap the microphone to try again.', true);
    };
    try { recognition.start(); }
    catch {
      browserRecognition = null;
      browserVoiceFailed = true;
      resetVoiceButton();
      recordVoiceForTranscription();
    }
  }
  async function recordVoiceForTranscription() {
    const button = document.getElementById('voice-button');
    if (voiceStarting) return;
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) return showToast(t('voiceUnsupported'), true);
    voiceStarting = true;
    if (button) button.disabled = true;
    try {
      voiceStream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const preferredType = ['audio/webm;codecs=opus', 'audio/ogg;codecs=opus', 'audio/mp4'].find(type => MediaRecorder.isTypeSupported(type));
      voiceRecorder = new MediaRecorder(voiceStream, preferredType ? { mimeType: preferredType } : undefined);
      voiceChunks = [];
      voiceRecorder.ondataavailable = event => { if (event.data?.size) voiceChunks.push(event.data); };
      voiceRecorder.onstop = transcribeRecordedVoice;
      voiceRecorder.onerror = () => { releaseVoiceStream(); button?.classList.remove('recording'); showToast(t('micUnavailable'), true); };
      voiceRecorder.start();
      button?.classList.add('recording');
      button.textContent = '■';
      button.title = t('voiceStop');
      button.setAttribute('aria-label', t('voiceStop'));
      if (button) button.disabled = false;
      voiceStarting = false;
      showToast(t('voiceRecording'));
      voiceStopTimer = setTimeout(() => { if (voiceRecorder?.state === 'recording') voiceRecorder.stop(); }, 30000);
    } catch (error) {
      releaseVoiceStream();
      button?.classList.remove('recording');
      if (button) button.disabled = false;
      voiceStarting = false;
      if (error?.name === 'NotAllowedError' || error?.name === 'SecurityError') showToast(t('voicePermission'), true);
      else showToast(t('micUnavailable'), true);
    }
  }
  async function transcribeRecordedVoice() {
    const button = document.getElementById('voice-button');
    clearTimeout(voiceStopTimer);
    const mimeType = voiceRecorder?.mimeType || voiceChunks[0]?.type || 'audio/webm';
    const blob = new Blob(voiceChunks, { type: mimeType });
    releaseVoiceStream();
    button?.classList.remove('recording');
    if (button) { button.textContent = '🎙'; button.title = t('voiceInput'); button.setAttribute('aria-label', t('voiceInput')); }
    voiceRecorder = null;
    voiceChunks = [];
    if (!blob.size) return showToast(t('micUnavailable'), true);
    voiceTranscribing = true;
    if (button) button.disabled = true;
    showToast(t('voiceTranscribing'));
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = () => reject(new Error(t('micUnavailable')));
        reader.readAsDataURL(blob);
      });
      const response = await fetch('/api/transcribe', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mimeType, data: dataUrl.split(',')[1] })
      });
      const result = await response.json();
      if (!response.ok) {
        const message = response.status === 429 || /quota|limit|resource.exhausted/i.test(result.error || '')
          ? 'Cloud voice quota reached. Open Koottu in Chrome and refresh to use browser speech, or type your message.'
          : result.error || t('micUnavailable');
        throw new Error(message);
      }
      const input = document.getElementById('assistant-input');
      input.value = [input.value.trim(), result.transcript].filter(Boolean).join(' ');
      input.focus();
      showToast(t('voiceReady'));
    } catch (error) {
      showToast(error.message || t('micUnavailable'), true);
    } finally {
      voiceTranscribing = false;
      resetVoiceButton();
    }
  }
  function releaseVoiceStream() {
    clearTimeout(voiceStopTimer);
    voiceStream?.getTracks().forEach(track => track.stop());
    voiceStream = null;
  }
  function updateModelChip() {
    const chip = document.getElementById('model-chip');
    if (chip) chip.textContent = gemmaConnected ? t('assistantOnline') : !gemmaStatusChecked ? t('assistantChecking') : geminiConfigured ? t('assistantUnreachable') : t('assistantOffline');
  }
  function clearReceipt() { selectedReceipt = null; const file = document.getElementById('receipt-input'); file.value = ''; const preview = document.getElementById('receipt-preview-wrap'); if (preview) preview.innerHTML = ''; }
  async function prepareReceiptImage(file) {
    const sourceUrl = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(new Error('The receipt image could not be read.'));
      reader.readAsDataURL(file);
    });
    const image = await new Promise((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error('The receipt image could not be opened.'));
      element.src = sourceUrl;
    });
    const scale = Math.min(1, 1800 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    if (!context) throw new Error('Receipt image processing is unavailable in this browser.');
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    let dataUrl = canvas.toDataURL('image/jpeg', 0.84);
    if (dataUrl.length > 4_000_000) dataUrl = canvas.toDataURL('image/jpeg', 0.68);
    if (dataUrl.length > 4_000_000) throw new Error('This receipt image is still too large after compression. Try a smaller photo.');
    return dataUrl;
  }
  function selectReceipt(file) {
    if (!file) return;
    const extension = file.name.toLowerCase().match(/\.(png|jpe?g|webp)$/)?.[1];
    const mimeType = ({ png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' })[extension] || ({ 'image/pjpeg': 'image/jpeg', 'image/jpg': 'image/jpeg' })[file.type] || file.type;
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(mimeType)) return showToast('Choose a PNG, JPG, or WebP receipt image.', true);
    if (file.size > 12 * 1024 * 1024) return showToast('Please choose an image smaller than 12 MB.', true);
    prepareReceiptImage(file).then(dataUrl => {
      selectedReceipt = { mimeType: 'image/jpeg', data: dataUrl.split(',')[1], name: file.name };
      document.getElementById('receipt-preview-wrap').innerHTML = `<div class="receipt-preview"><img src="${dataUrl}" alt="Receipt preview"><span>${t('receiptSelected')}: ${escapeHtml(file.name)}</span><button type="button" id="remove-receipt" aria-label="${t('remove')}">×</button></div>`;
      document.getElementById('remove-receipt').addEventListener('click', clearReceipt);
      document.getElementById('assistant-input').focus();
      showToast(t('receiptSelected'));
    }).catch(error => showToast(error.message || 'The receipt image could not be prepared.', true));
  }
  function checkGemma() {
    if (gemmaCheckPromise) return gemmaCheckPromise;
    gemmaCheckPromise = (async () => {
      try {
        const response = await fetch('/api/status', { cache: 'no-store' });
        if (!response.ok) throw new Error('Status check failed.');
        const data = await response.json();
        gemmaConnected = Boolean(data.gemmaReady);
        geminiConfigured = Boolean(data.configured);
      } catch {
        gemmaConnected = false;
        geminiConfigured = false;
      } finally {
        gemmaStatusChecked = true;
        gemmaCheckPromise = null;
        updateModelChip();
      }
    })();
    return gemmaCheckPromise;
  }
  function showAbout() {
    const backdrop = document.getElementById('about-modal');
    backdrop.classList.add('open'); backdrop.setAttribute('aria-hidden', 'false');
  }
  document.getElementById('invite-button').addEventListener('click', openInviteModal);
  document.getElementById('invite-modal').addEventListener('click', event => {
    if (event.target.id === 'invite-modal' || event.target.closest('.close-invite')) closeInviteModal();
  });
  document.querySelectorAll('.close-invite').forEach(button => button.addEventListener('click', closeInviteModal));
  document.getElementById('copy-invite').addEventListener('click', copyInviteLink);
  document.getElementById('share-invite').addEventListener('click', shareInviteLink);
  document.getElementById('roommate-form').addEventListener('submit', addRoommate);
  document.getElementById('help-button').addEventListener('click', showAbout);
  document.getElementById('building-switcher').addEventListener('click', () => showToast(t('ledgerNoteBody')));
  document.getElementById('expense-modal').addEventListener('click', event => { if (event.target.id === 'expense-modal' || event.target.closest('.close-modal')) closeModal(); });
  document.getElementById('about-modal').addEventListener('click', event => {
    if (event.target.id === 'about-modal' || event.target.closest('.close-about')) {
      event.currentTarget.classList.remove('open'); event.currentTarget.setAttribute('aria-hidden', 'true');
    }
  });
  document.getElementById('expense-form').addEventListener('submit', saveExpense);
  document.getElementById('expense-title').addEventListener('input', updateSplitPreview);
  document.getElementById('expense-amount').addEventListener('input', updateSplitPreview);
  document.getElementById('expense-amount').addEventListener('input', updatePayerPreview);
  document.getElementById('payer-contributions').addEventListener('change', event => {
    if (event.target.matches('[data-payer-select]')) updatePayerPreview();
  });
  document.getElementById('payer-contributions').addEventListener('input', event => {
    if (event.target.matches('[data-payer-amount]')) { payerAmountsTouched = true; updatePayerPreview(); }
  });
  document.getElementById('split-method').addEventListener('change', event => { document.getElementById('custom-splits-wrap').classList.toggle('hidden', event.target.value !== 'custom'); renderCustomInputs(); updateSplitPreview(); });
  document.getElementById('household-checks').addEventListener('change', () => { renderCustomInputs(); updateSplitPreview(); });
  document.getElementById('custom-splits').addEventListener('input', updateSplitPreview);
  document.getElementById('receipt-input').addEventListener('change', event => selectReceipt(event.target.files[0]));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); closeInviteModal(); } if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); if (document.querySelector('.assistant-card')) document.getElementById('assistant-input')?.focus(); } });
  render();
  if (new URLSearchParams(window.location.search).has('invite')) openInviteModal();
  checkGemma();
})();
