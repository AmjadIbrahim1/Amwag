# 🛍️ Amwag E-Commerce

<div align="center">

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-5-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtoken)

**A full-stack e-commerce application**

</div>

---

## 📌 Project Overview

**Amwag** is a full-stack e-commerce application with a **React + Material UI** frontend and a **Node.js + Express + TypeScript** backend powered by **MongoDB**. It supports user accounts, product browsing, cart management, and order checkout — all secured with **JWT authentication**.

---

## ✨ Key Features

### 👤 User Management
- Register and login with JWT authentication
- Profile management

### 🛒 Shopping
- Browse products
- Add, update, and remove cart items
- Clear the cart
- Checkout with address capture

### 🛍️ Products
- Product listing
- Product management (admin)

### 🎨 UI/UX
- Modern, responsive Material UI design
- Dedicated pages: Home, Cart, Checkout, Login, Register, Order Success

---

## 🛠️ Tech Stack

### Backend (`backend/`)
| Technology | Purpose |
|------------|---------|
| **Node.js + Express** | Web framework |
| **TypeScript** | Type safety |
| **MongoDB (Mongoose)** | Database |
| **JWT** | Authentication |
| **bcrypt** | Password hashing |

### Frontend (`frontend/`)
| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework |
| **Vite 5** | Build tool |
| **Material UI 5** | Component library |
| **React Router 6** | Routing |

---

## 📁 Project Structure

```
Amwag/
├── backend/
│   ├── src/
│   │   ├── index.ts          # Server entry point
│   │   ├── routes/
│   │   │   ├── userRoute.ts      # Auth endpoints
│   │   │   ├── productRoute.ts   # Product endpoints
│   │   │   └── cartRoute.ts      # Cart & checkout endpoints
│   │   ├── models/           # Mongoose models
│   │   ├── services/         # Business logic
│   │   ├── middlewares/      # JWT validation, etc.
│   │   └── types/            # TypeScript types
│   └── package.json
└── frontend/
    ├── src/
    │   ├── App.tsx           # Main app with routing
    │   ├── pages/
    │   │   ├── HomePage.tsx      # Product listing
    │   │   ├── CartPage.tsx      # Shopping cart
    │   │   ├── CheckoutPage.tsx  # Checkout
    │   │   ├── LoginPage.tsx     # Login
    │   │   ├── RegisterPage.tsx  # Registration
    │   │   └── OrderSuccessPage.tsx
    │   ├── components/       # Reusable components
    │   ├── context/          # React context
    │   ├── constants/        # Constants
    │   └── types/            # TypeScript types
    └── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

### 1️⃣ Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5001`.

### 2️⃣ Frontend

```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3001`.

---

## 🔑 Environment Variables

Create a `.env` file inside `backend/`:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📡 API Endpoints

### 🔐 Auth (`/api/users`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/users/register` | Register a new user | ❌ |
| POST | `/api/users/login` | Login and get JWT token | ❌ |

### 🛍️ Products (`/api/products`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/products` | Get all products | ❌ |

### 🛒 Cart (`/api/cart`)
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/cart` | Get active cart | ✅ |
| DELETE | `/api/cart` | Clear the cart | ✅ |
| POST | `/api/cart/items` | Add item to cart | ✅ |
| PUT | `/api/cart/items` | Update item quantity | ✅ |
| DELETE | `/api/cart/items/:productId` | Remove item from cart | ✅ |
| POST | `/api/cart/checkout` | Checkout and create order | ✅ |

---

## 📦 Available Scripts

### Backend
```bash
npm run dev   # Start with nodemon
```

### Frontend
```bash
npm run dev      # Start dev server
npm run build    # Type-check and build
npm run lint     # ESLint
npm run preview  # Preview production build
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — feel free to use and modify it.

---

## 👨‍💻 Author

**Amjad Ibrahim**

- GitHub: [AmjadIbrahim1](https://github.com/AmjadIbrahim1)
