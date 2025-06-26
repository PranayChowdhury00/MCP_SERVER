# 📅 MCP Google Calendar Integration

This project is a **Model Context Protocol (MCP)** tool that connects with the **Google Calendar API** to fetch calendar events for a given date. It integrates seamlessly with AI-driven editors like **[Cursor](https://www.cursor.so/)** to enhance your productivity by bringing live calendar data right into your coding environment.

---

## 🔧 Features

- 📆 Get calendar events for a specific date
- ⚡ Real-time integration using MCP
- 🧠 Natural language tool commands from inside your editor
- ✅ Simple schema validation using `zod`
- 🔒 Uses environment variables to keep sensitive info secure

---

## 📁 Project Structure

/MCP_SERVER
│
├── server.js # MCP server setup and calendar tool
├── .env # Environment variables (not committed)
├── package.json # Dependencies and scripts
└── .mcp # MCP configuration file

---

## 📦 Technologies Used

- [`@modelcontextprotocol/sdk`](https://www.npmjs.com/package/@modelcontextprotocol/sdk) – MCP server and transport
- [`googleapis`](https://www.npmjs.com/package/googleapis) – Google Calendar API client
- [`zod`](https://www.npmjs.com/package/zod) – Input validation
- [`dotenv`](https://www.npmjs.com/package/dotenv) – Load `.env` files

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mcp-calendar-tool.git
cd mcp-calendar-tool

```
2. Install dependencies
npm install
3. Create a .env file
GOOGLE_API_KEY=your_google_calendar_api_key
CALENDAR_ID=your_calendar_id_or_email
4. Run the server
npm start
------------
## Usage Example (in Cursor)

🛠 MCP Configuration (.mcp)

{
  "mcpServers": {
    "myCalenderData": {
      "command": "node",
      "args": ["server.js"],
      "env": {
        "GOOGLE_API_KEY": "your_api_key_here",
        "CALENDAR_ID": "your_calendar_id_here"
      }
    }
  }
}
## 🔐 Notes on API Access
Make sure the Google Calendar API is enabled in your Google Cloud Console.

The calendar should be public or shared properly if using an API key.

## 🧭 Future Improvements
Add OAuth2 authentication for multiple users

Support recurring events and event descriptions

Integrate Google Tasks and reminders

## 📄 License
This project is open-source and available under the MIT License.

## 🙋‍♂️ Author
Pranay Chowdhury
Frontend Developer | MERN Stack Enthusiast
LinkedIn • GitHub

