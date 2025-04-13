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
├── backend/ # Node.js + Express + MongoDB (API & Server logic)
│ ├── controllers/ # Route controller functions
│ ├── models/ # Mongoose schema models
│ ├── routes/ # API route definitions
│ ├── middleware/ # Custom middlewares (e.g., auth, error handling)
│ ├── config/ # Configuration files (DB, env, etc.)
│ └── server.js # Entry point of backend app
│
├── frontend/ # Angular Application
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Reusable components (navbar, cards, etc.)
│ │ │ ├── pages/ # Main pages (home, product-list, cart, etc.)
│ │ │ ├── services/ # Services for API interaction
│ │ │ ├── models/ # TypeScript interfaces for data types
│ │ │ └── app.module.ts # Main Angular module
│ │ ├── assets/ # Static assets (images, icons, etc.)
│ │ └── environments/ # Environment files for dev/prod
│
├── shared/ # (Optional) Shared utils or constants across frontend/backend
│
├── .gitignore
├── README.md
├── package.json # Project metadata and scripts
└── angular.json # Angular CLI configuration
