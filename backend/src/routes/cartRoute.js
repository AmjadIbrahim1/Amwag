import express from "express";
import {
  getActiveCartForUser,
  addItemToCart,
  updateItemInCart,
  deleteItemInCart,
  clearCart,
  checkout,
} from "../services/cartService.js";
import validateJWT from "../middlewares/validateJWT.js";

const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const cart = await getActiveCartForUser({ userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.post("/items", validateJWT, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const { product, quantity } = req.body;

    const response = await addItemToCart({
      userId,
      productId: product,
      quantity,
    });

    res.status(response.statusCode).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.put("/items", validateJWT, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const { product, quantity } = req.body;

    const response = await updateItemInCart({
      userId,
      productId: product,
      quantity,
    });

    res.status(response.statusCode).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.delete("/items/:productId", validateJWT, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const { productId } = req.params;

    const response = await deleteItemInCart({ userId, productId });
    res.status(response.statusCode).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.delete("/", validateJWT, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const response = await clearCart({ userId });
    res.status(response.statusCode).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.post("/checkout", validateJWT, async (req, res) => {
  try {
    const userId = req?.user?._id;
    const { address } = req.body;

    const response = await checkout({ userId, address });
    res.status(response.statusCode).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

export default router;
