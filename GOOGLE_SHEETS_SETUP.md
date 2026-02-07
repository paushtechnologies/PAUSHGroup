# Google Sheets Integration Setup Guide

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "PAUSH Group Appointments" or similar
4. Create headers in Row 1:
   - Column A: Timestamp
   - Column B: Type
   - Column C: Name
   - Column D: Email
   - Column E: Phone
   - Column F: Message

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Add row to sheet
    sheet.appendRow([
      data.timestamp,
      data.type,
      data.name,
      data.email,
      data.phone,
      data.message
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput("PAUSH Group Form Handler")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

3. Click **Save** (Ctrl+S or Cmd+S)
4. Give your project a name (e.g., "PAUSH Form Handler")

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
3. Set the following:
   - **Description**: "PAUSH Group Form Handler"
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click **Deploy**
5. **Copy the Web App URL** (it will look like: `https://script.google.com/macros/s/...`)
6. Click **Authorize access** and grant permissions

## Step 4: Add URL to Config

1. Open `src/config.js`
2. Paste your Web App URL in the `GOOGLE_SHEET_URL` variable:

```javascript
export const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
```

## Step 5: Test

1. Fill out the appointment/consultation form on your website
2. Submit it
3. Check your Google Sheet - the data should appear in a new row

## Troubleshooting

- **Form not submitting**: Check browser console for errors
- **Data not appearing**: Make sure you authorized the script and set "Who has access" to "Anyone"
- **CORS errors**: The script uses `no-cors` mode, so you won't see response errors in console, but data should still be saved

## Security Note

Since this is deployed on GitHub Pages, the Google Apps Script URL will be visible in the code. Make sure:
- Your script only accepts POST requests
- You've set appropriate permissions
- Consider adding rate limiting in your script if needed
