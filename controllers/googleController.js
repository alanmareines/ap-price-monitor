import { google } from 'googleapis'
import dotenv from 'dotenv'

dotenv.config()

export async function writeSheetData(values) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  // const response = await sheets.spreadsheets.values.get({
  //   spreadsheetId: process.env.SHEET_ID,
  //   range,
  // })

  const body = { values: values, majorDimension: 'COLUMNS' }

  const response = await sheets.spreadsheets.values.append({
    range: 'Sheet1',
    spreadsheetId: process.env.SHEET_ID,
    valueInputOption: 'USER_ENTERED',
    resource: body,
  })

  return response
}
