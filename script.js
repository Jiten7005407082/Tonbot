// First enable Sheets API: https://console.cloud.google.com/apis/library/sheets.googleapis.com
async function fetchViaSheetsAPI() {
  const API_KEY = "YOUR_API_KEY";
  const SHEET_ID = "1YOUR_SHEET_ID";
  const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSuFI_1eO2D1GqOeZNYAOt1CkzgU4gIXvC_06fMgnhC1BilFUZ_2mgNYD4G_e2XuFD5ylZzYUjgoqTu/pubhtml`;

  const response = await fetch(url);
  const data = await response.json();
  
  return data.values || [];
}
