import fs from "fs";
import path from "path";
import { google } from "googleapis";
import open from "open";

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const TOKEN_PATH = path.join(process.cwd(), "token.json");
const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

export async function getOAuth2Client() {
    // Load client secrets
    const content = fs.readFileSync(CREDENTIALS_PATH, "utf-8");
    const credentials = JSON.parse(content);
    const { client_secret, client_id, redirect_uris } = credentials.installed;

    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    // Check for previously stored token
    if (fs.existsSync(TOKEN_PATH)) {
        const token = fs.readFileSync(TOKEN_PATH, "utf-8");
        oAuth2Client.setCredentials(JSON.parse(token));
        return oAuth2Client;
    }

    // Generate a new token
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);
    await open(authUrl);

    // Prompt for the code
    const readline = await import("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    const code = await new Promise((resolve) => {
        rl.question("Enter the code from that page here: ", (code) => {
            rl.close();
            resolve(code);
        });
    });

    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    // Store the token to disk for later program executions
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    console.log("Token stored to", TOKEN_PATH);
    return oAuth2Client;
}