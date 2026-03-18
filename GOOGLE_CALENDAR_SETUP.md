# Google Calendar Setup

## Prerequisites

1. Google Cloud Platform account
2. Google Calendar API enabled
3. Service account created

## Setup Steps

### 1. Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Calendar API

### 2. Create Service Account

1. Go to IAM & Admin > Service Accounts
2. Click "Create Service Account"
3. Name: `akpro-bot-service`
4. Click "Create and Continue"
5. Skip role assignment
6. Click "Done"

### 3. Create Key

1. Click on the service account
2. Go to "Keys" tab
3. Click "Add Key" > "Create new key"
4. Select "JSON"
5. Download the key file

### 4. Share Calendar

1. Open Google Calendar
2. Click on the calendar you want to share
3. Go to "Settings and sharing"
4. Under "Share with specific people", add the service account email
5. Give "Make changes to events" permission

### 5. Get Calendar ID

1. In calendar settings, find "Calendar ID"
2. Copy the ID (usually your email address)

### 6. Configure Bot

Add to `.env`:
```
GOOGLE_CALENDAR_ID=your-calendar-id@gmail.com
GOOGLE_CREDENTIALS={"type":"service_account",...}
```

## Testing

Run the test script:
```bash
node test-calendar.js
```