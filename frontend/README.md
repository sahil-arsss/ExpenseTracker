# Expense Tracker App (Frontend)

This is the frontend for the Expense Tracker App, a web application that helps users manage and analyze their expenses and income. The app provides features such as user authentication, transaction management, analytics, and customizable avatars.

## Features

- User registration and login
- Set a custom avatar using DiceBear avatars
- Add, edit, and delete transactions (income and expenses)
- Filter transactions by date range, type, and frequency
- Visual analytics with charts and progress bars
- Responsive and modern UI with React, Bootstrap, and Material UI icons
- Toast notifications for user feedback

## Tech Stack

- **React** (with Hooks)
- **React Router** for navigation
- **Bootstrap** and **React-Bootstrap** for UI components
- **Material UI Icons**
- **Axios** for API requests
- **Moment.js** for date formatting
- **React Toastify** for notifications
- **React Tsparticles** for animated backgrounds

## Getting Started

### Prerequisites

- Node.js and npm installed
- Backend server running (see `/backend` folder)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/expense-tracker-app.git
   cd expense-tracker-app/frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend development server:
   ```sh
   npm start
   ```

   This will run the app in development mode.<br>
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Running the Backend

1. Open a new terminal and navigate to the backend folder:
   ```sh
   cd ../backend
   ```

2. Install backend dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the backend directory and add your MongoDB connection string and other environment variables as shown in `.env.example` (if provided).

4. Start the backend server:
   ```sh
   npm run dev
   ```

   The backend will run on [http://localhost:5000](http://localhost:5000) by default.

### Notes

- Make sure both frontend and backend servers are running for the app to function correctly.
- Update API URLs in [`src/utils/ApiRequest.js`](src/utils/ApiRequest.js) if your backend runs on a different host or port.