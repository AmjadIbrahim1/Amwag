🛍️ Amwag E-Commerce

Amwag is a full-stack e-commerce application built with:

⚡ Backend: Node.js + Express + TypeScript

🎨 Frontend: React + Material UI

🛢️ Database: (MongoDB – adjust based on your setup)

🔐 Authentication: JWT-based Auth

✨ Features

👤 User management (register, login, update profile)

🛒 Cart management (add, update, remove items)

📦 Order management (create and track orders)

🛍️ Product management (list, add, update, delete products)

🔐 Secure APIs with JWT authentication

🎨 Modern and responsive UI with Material UI



🚀 Getting Started
1️⃣ Backend
cd backend
npm install
npm run dev


Backend runs on:
👉 http://localhost:5001

2️⃣ Frontend
cd frontend
npm install
npm start


Frontend runs on:
👉 http://localhost:3001

🔑 Environment Variables

Create a .env file inside backend/ with:

PORT=3001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

📌 API Endpoints
Method	Endpoint	Description	Auth

POST	/api/products	Add a new product	✅
GET	/api/cart	Get cart contents	✅
POST	/api/cart	Add item to cart	✅
POST	/api/orders	Create new order	✅
📸 Screenshots

🤝 Contributing

Fork the repo

Create a new branch feature/your-feature

Commit your changes

Open a Pull Request

📜 License

This project is licensed under the MIT License – feel free to use and modify it.
