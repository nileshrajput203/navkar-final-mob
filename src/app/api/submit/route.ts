
import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    // Important: Replace \\n with \n and remove surrounding quotes if they exist.
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n').replace(/^"|"$/g, '');
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !sheetId) {
      console.error("Google API credentials are not configured in .env file.");
      return NextResponse.json({ success: false, message: "API credentials not configured." }, { status: 500 });
    }

    const auth = new google.auth.JWT(
      clientEmail,
      undefined,
      privateKey,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const sheets = google.sheets({ version: "v4", auth });

    let values: any[];
    let sheetName: string;

    if (body.formType === 'application') {
      const { name, phone, email, jobTitle, resumeInfo } = body;
      values = [new Date().toISOString(), name, phone, email, jobTitle, resumeInfo];
      sheetName = 'Applications';
    } else { // Default to enquiry
      const { name, phone, email, message } = body;
      values = [new Date().toISOString(), name, phone, email, message];
      sheetName = 'Enquiries';
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [values],
      },
    });

    return NextResponse.json({ success: true, data: response.data });

  } catch (error: any) {
    console.error("Error in /api/submit: ", error.message);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
