
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js";
import productRoute from "./routes/productRoute.js";
import { seedInitialProducts } from "./services/productService.js";
import dotenv from "dotenv";
import cors from "cors"

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const startServer = async () => {
  try {
    const dbUrl = process.env.DATABASE_URL || "mongodb://localhost:27017/Amwag";
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to DB");

    try {
      await seedInitialProducts();
      console.log(" Initial products seeded");
    } catch (err) {
      console.error(" Error seeding initial products:", err);
    }

    app.use("/user", userRoute);
    app.use("/product", productRoute);
    app.use("/cart", cartRoute);

    app.listen(port, () => {
      console.log(` Server running on port ${port}`);
    });
  } catch (err) {
    console.error("DB Connection Error:", err);
    process.exit(1);
  }
};

startServer();
