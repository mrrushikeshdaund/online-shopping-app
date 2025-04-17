# 🛒 Online Shopping App

A full-featured e-commerce web application built using the **MEAN Stack** (MongoDB, Express, Angular, Node.js). It allows users to sign up, browse products, add items to a cart, and checkout securely.

---

## 🚀 Features

- 🔐 User Authentication (Signup / Login)
- 🧾 Product Listings with details
- 🛍️ Shopping Cart Functionality
- 📦 Order Placement
- 🧑‍💼 Admin Panel for product management
- 📈 Responsive UI with Angular Material or Bootstrap
- 🔒 JWT-based Authentication

---

## 🧱 Tech Stack

| Layer    | Technology              |
| -------- | ----------------------- |
| Frontend | Angular (TypeScript)    |
| Backend  | Node.js, Express        |
| Database | MongoDB with Mongoose   |
| Auth     | JWT, Bcrypt             |
| Styling  | Angular Material / SCSS |

---

## 📁 Project Structure

online-shopping-app/
├── backend/                  # Node.js + Express Backend API
│   ├── config/               # Database configuration and environment setup
│   ├── controllers/          # Route logic and business logic
│   ├── middleware/           # Custom middleware (e.g., auth, error handling)
│   ├── models/               # Mongoose data models
│   ├── routes/               # API route definitions
│   ├── utils/                # Utility functions (e.g., token generation)
│   ├── server.js             # Entry point for backend server
│   └── .env                  # Environment variables
│
├── frontend/                 # Angular Frontend App
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/   # Reusable UI components
│   │   │   ├── pages/        # Page-level components (e.g., Home, Cart)
│   │   │   ├── services/     # HTTP services and API calls
│   │   │   ├── models/       # TypeScript interfaces and types
│   │   │   ├── guards/       # Route guards (e.g., AuthGuard)
│   │   │   └── app.module.ts # Angular module configuration
│   │   ├── assets/           # Static assets like images and styles
│   │   ├── environments/     # Environment-specific configs
│   │   └── index.html        # Main HTML file
│   └── angular.json          # Angular project configuration
│
├── README.md                 # Project overview and setup guide
├── package.json              # Project metadata and dependencies (if shared)
└── .gitignore                # Ignored files and folders

