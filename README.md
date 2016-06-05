# Evernote Parser

This package contains files and tests which can be used to build a Zap for Zapier that can parse scanned business cards.

## Getting started:

1. Create a new Zap for Evernote that is triggered by a new note.
2. Add a Run Javascript step (see Zapier-Javascript.jpg for a screenshot):
  1. Set input as follows:
    * rawText = Content no Html
    * contentHTML = Content HTML
  2. Paste the content from evernoteParserZap.js into the code window
3. Add an action step to push the name, company, title, phone, etc to your end destination (e.g., Google Contacts or a CRM)



## Files included:

* evernoteParser.js - contains that innerHTML() function that can return data from the 'content' portion of an Evernote document.
* evernoteParserTest.js - a Google JSTest script (see https://github.com/google/gjstest)
* evernoteParserZap.js - the code to add to a Zapier action step which can parse the Evernote file

