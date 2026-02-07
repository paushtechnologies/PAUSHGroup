# Google Sheets Read Setup Guide

## For Real Estate Listings

### Option 1: Publish as CSV (Easiest)

1. Create a Google Sheet with these columns (Row 1 = Headers):
   - Type (Flat, Plot, Shop, etc.)
   - Title (Property title)
   - Location (Address)
   - Price (e.g., ₹85 Lakhs)
   - Area (e.g., 1,850 sq.ft)
   - Bedrooms (number or empty)
   - Bathrooms (number or empty)
   - Image (URL to property image)
   - Features (comma-separated: Parking, Lift, Power Backup)

2. Go to **File** → **Share** → **Publish to web**
3. Select **CSV** format
4. Copy the published link
5. Add it to `src/config.js` as `REAL_ESTATE_SHEET_URL`

### Option 2: Google Apps Script (Recommended)

1. Create a Google Sheet with the same columns as above
2. Go to **Extensions** → **Apps Script**
3. Paste this code:

```javascript
function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Skip header row
  const headers = data[0];
  const rows = data.slice(1);
  
  // Convert to JSON
  const jsonData = rows.map(row => {
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || '';
    });
    return obj;
  });
  
  return ContentService
    .createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Deploy** → **New deployment**
5. Select **Web app**
6. Set **Execute as**: Me
7. Set **Who has access**: Anyone
8. Copy the Web App URL
9. Add it to `src/config.js` as `REAL_ESTATE_SHEET_URL`

## For Credit Card Offers

### Same process as above, but with these columns:

- Title (Card name)
- Type (Credit Card or Debit Card)
- Features (comma-separated list)
- Cashback (comma-separated list)
- ReferralCode (optional)
- ReferralLink (application link)
- Note (important notes)
- Validity (validity period)
- Steps (comma-separated steps for debit card hack, optional)

Add the URL to `src/config.js` as `CREDIT_CARD_SHEET_URL`

## Example Sheet Structure

### Real Estate Sheet:
| Type | Title | Location | Price | Area | Bedrooms | Bathrooms | Image | Features |
|------|-------|----------|-------|------|----------|-----------|-------|----------|
| Flat | 3 BHK Luxury | Sector 62 | ₹85 Lakhs | 1,850 sq.ft | 3 | 2 | https://... | Parking, Lift, Power Backup |

### Credit Card Sheet:
| Title | Type | Features | Cashback | ReferralCode | ReferralLink | Note | Validity |
|-------|------|----------|----------|--------------|--------------|------|----------|
| Edge+ CSB Bank | Credit Card | Lifetime Free, Welcome Offer | 10% shopping, 5% travel | 1Ft9kW | http://... | Offers valid via link | 14 days |

## Notes

- The first row should always be headers
- Empty cells are handled gracefully
- Image URLs should be full URLs (can use Unsplash or your own images)
- Features and Cashback can be comma-separated strings
- The website will automatically parse and display the data
