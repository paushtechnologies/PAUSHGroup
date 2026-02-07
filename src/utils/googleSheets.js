// Utility functions to fetch data from Google Sheets

/**
 * Fetch data from Google Sheet published as CSV
 * @param {string} sheetUrl - Google Sheet CSV export URL
 * @returns {Promise<Array>} Array of objects with sheet data
 */
export const fetchFromGoogleSheetCSV = async (sheetUrl) => {
  try {
    const response = await fetch(sheetUrl);
    const csvText = await response.text();
    
    // Parse CSV
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length === 0) return [];
    
    // Get headers
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    
    // Parse rows
    const data = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
      if (values.length === headers.length && values.some(v => v)) {
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        data.push(row);
      }
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching from Google Sheet:', error);
    return [];
  }
};

/**
 * Fetch data from Google Apps Script Web App that returns JSON
 * @param {string} scriptUrl - Google Apps Script Web App URL
 * @returns {Promise<Array>} Array of objects with sheet data
 */
export const fetchFromGoogleScript = async (scriptUrl) => {
  try {
    const response = await fetch(scriptUrl);
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error fetching from Google Script:', error);
    return [];
  }
};

/**
 * Fetch data from Google Sheet using JSON export
 * @param {string} sheetId - Google Sheet ID
 * @param {string} sheetName - Sheet name
 * @returns {Promise<Array>} Array of objects with sheet data
 */
export const fetchFromGoogleSheetJSON = async (sheetId, sheetName = 'Sheet1') => {
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    const response = await fetch(url);
    const text = await response.text();
    
    // Remove the prefix that Google Sheets adds
    const jsonText = text.substring(text.indexOf('{'));
    const data = JSON.parse(jsonText);
    
    if (!data.table || !data.table.rows) return [];
    
    // Get headers
    const headers = data.table.cols.map(col => col.label || '');
    
    // Parse rows
    const rows = [];
    data.table.rows.forEach((row, index) => {
      if (index === 0) return; // Skip header row if present
      const rowData = {};
      row.c.forEach((cell, cellIndex) => {
        if (cell && cell.v !== undefined) {
          rowData[headers[cellIndex]] = cell.v;
        }
      });
      if (Object.keys(rowData).length > 0) {
        rows.push(rowData);
      }
    });
    
    return rows;
  } catch (error) {
    console.error('Error fetching from Google Sheet JSON:', error);
    return [];
  }
};

/**
 * Main function to fetch data - tries multiple methods
 * @param {string} url - Google Sheet URL or Script URL
 * @returns {Promise<Array>} Array of objects with sheet data
 */
export const fetchGoogleSheetData = async (url) => {
  if (!url) return [];
  
  // If it's a Google Apps Script URL, use that method
  if (url.includes('script.google.com')) {
    return await fetchFromGoogleScript(url);
  }
  
  // If it's a CSV export URL
  if (url.includes('/export?format=csv') || url.includes('&output=csv')) {
    return await fetchFromGoogleSheetCSV(url);
  }
  
  // Try to extract sheet ID and use JSON method
  const sheetIdMatch = url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (sheetIdMatch) {
    const sheetId = sheetIdMatch[1];
    return await fetchFromGoogleSheetJSON(sheetId);
  }
  
  // Default: try as CSV
  const csvUrl = url.includes('?') ? `${url}&exportFormat=csv` : `${url}?exportFormat=csv`;
  return await fetchFromGoogleSheetCSV(csvUrl);
};
