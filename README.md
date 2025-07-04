# Expense Tracker App

A full-stack web application to manage and analyze your expenses and income. Features include user authentication, transaction management, analytics, and customizable avatars.

## Project Structure

```
.
├── backend/    # Node.js/Express backend API
├── frontend/   # React frontend application
└── README.md   # Project documentation
```

## Features

- User registration and login
- Set a custom avatar using DiceBear avatars
- Add, edit, and delete transactions (income and expenses)
- Filter transactions by date range, type, and frequency
- Visual analytics with charts and progress bars
- Responsive UI with React, Bootstrap, and Material UI icons
- Toast notifications for user feedback

## Tech Stack

- **Frontend:** React, React Router, Bootstrap, Material UI Icons, Axios, Moment.js, React Toastify, React Tsparticles
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt, dotenv, helmet, morgan

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database (local or cloud, e.g., MongoDB Atlas)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/expense-tracker-app.git
   cd expense-tracker-app
   ```

2. **Setup the backend:**
   ```sh
   cd backend
   npm install
   ```
   - Create a `.env` file in the `backend` directory. Use the format:
     ```
     MONGO_URL="your_mongodb_connection_string"
     PORT=5000
     JWT_SECRET="yourSecretKey"
     ```
   - Start the backend server:
     ```sh
     npm run dev
     ```
   - The backend runs on [http://localhost:5000](http://localhost:5000) by default.

3. **Setup the frontend:**
   ```sh
   cd ../frontend
   npm install
   npm start
   ```
   - The frontend runs on [http://localhost:3000](http://localhost:3000) by default.

### Notes

- Ensure both frontend and backend servers are running for the app to function correctly.
- Update API URLs in [`frontend/src/utils/ApiRequest.js`](frontend/src/utils/ApiRequest.js) if your backend runs on a different host or port.

## Folder Structure

- [`backend/`](backend/) - Express API, models, controllers, routes, and database config
- [`frontend/`](frontend/) - React app source code, components, pages, and assets

## License

This project is licensed under the MIT License.

## Screenshots

![image](https://github.com/user-attachments/assets/d4e4bfb3-8b57-4081-b398-9675dd637fa9)

### Dashboard
![Screenshot 2025-07-05 021340](https://github.com/user-attachments/assets/16d8b4bf-e154-4bb7-aefc-f4b74a3425af)

### Add Transaction

![Screenshot 2025-07-05 021442](https://github.com/user-attachments/assets/61b5fb51-4754-4184-b31c-b8c1bacb03f7)
