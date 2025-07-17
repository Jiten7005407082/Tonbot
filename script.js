// First enable Sheets API: https://console.cloud.google.com/apis/library/sheets.googleapis.com
async function fetchViaSheetsAPI() {
  const API_KEY = "YOUR_API_KEY";
  const SHEET_ID = "1YOUR_SHEET_ID";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A:B?key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  
  return data.values || [];
}
