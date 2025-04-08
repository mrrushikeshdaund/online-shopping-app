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
│
├── frontend/ # Angular Frontend
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Reusable UI components
│ │ │ ├── pages/ # App pages (home, cart, login, etc.)
│ │ │ ├── services/ # Angular services (API calls)
│ │ │ ├── guards/ # Route guards (e.g., auth guard)
│ │ │ └── app.module.ts # Main app module
│ │ └── index.html
│ └── angular.json # Angular CLI config
│
├── backend/ # Node.js + Express Backend
│ ├── models/ # Mongoose models (User, Product, Order)
│ │ ├── user.model.js
│ │ ├── product.model.js
│ │ └── order.model.js
│ ├── routes/ # API route handlers
│ │ ├── auth.routes.js
│ │ ├── product.routes.js
│ │ └── order.routes.js
│ ├── controllers/ # Logic for handling requests
│ ├── middleware/ # Auth & error handling middleware
│ ├── config/ # DB connection and environment config
│ ├── app.js # Express app setup
│ └── server.js # Server entry point
│
├── .env # Environment variables
├── README.md # Project documentation
├── package.json # Backend dependencies
└── package-lock.json
