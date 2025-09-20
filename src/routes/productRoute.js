import express from "express";
import { getAllProducts } from "../services/productService.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

export default router;
