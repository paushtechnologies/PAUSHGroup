// Configuration file for Google Sheets and other settings
// Replace the Google Sheet URLs with your actual Google Apps Script Web App URLs

export const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbwXWdFy1M4y4eqpZWyR3mUdLFwpzb80G6ZU8cbOS6BuCQJkGVpNhtyHl8kCgP1Hegv_/exec'; // For appointment/consultation forms
export const CONTACT_EMAIL = 'paushgroup@gmail.com';
export const EMAILJS_SERVICE_ID = 'service_1qjw3yu';
export const EMAILJS_TEMPLATE_ID = 'template_80ahl5n';
export const EMAILJS_PUBLIC_KEY = 'L3cluXzkYIDX3FH_8';

// Google Sheets URLs for reading data
// Using the same Web App URL but targeting different sheet tabs
export const REAL_ESTATE_SHEET_URL = GOOGLE_SHEET_URL + '?sheet=RealEstate'; // Google Sheet URL for Real Estate listings
export const CREDIT_CARD_SHEET_URL = GOOGLE_SHEET_URL + '?sheet=CreditCards'; // Google Sheet URL for Credit Card offers

// Instructions for Google Sheets:
// Option 1: Publish as CSV and convert to JSON
// Option 2: Use Google Apps Script to return JSON
// Option 3: Use Google Sheets API (requires API key)
