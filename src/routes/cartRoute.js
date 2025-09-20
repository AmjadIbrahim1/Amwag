import express from "express";
import {
  getActiveCartForUser,
  addItemToCart,
  updateItemInCart,
  deleteItemInCart,
  clearCart,
  checkout
} from "../services/cartService.js";
import validateJWT from "../middlewares/validateJWT.js";

const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  const userId = req?.user?._id;
  const cart = await getActiveCartForUser({ userId });
  res.status(200).send(cart);
});

router.post("/items", validateJWT, async (req, res) => {
  const userId = req?.user?._id;
  const { product, quantity } = req.body;

  const response = await addItemToCart({
    userId,
    productId: product,
    quantity,
  });

  res.status(response.statusCode).send(response.data);
});

router.put("/items", validateJWT, async (req, res) => {
  const userId = req?.user?._id;
  const { product, quantity } = req.body;

  const response = await updateItemInCart({
    userId,
    productId: product,
    quantity,
  });

  res.status(response.statusCode).send(response.data);
});

router.delete("/items/:productId", validateJWT, async (req, res) => {
  const userId = req?.user?._id;
  const { productId } = req.params;

  const response = await deleteItemInCart({ userId, productId });
  res.status(response.statusCode).send(response.data);
});

router.delete("/", validateJWT, async (req, res) => {
  const userId = req?.user?._id;
  const response = await clearCart({ userId });
  res.status(response.statusCode).send(response.data);
});

router.post("/checkout", validateJWT, async (req, res) => {
  const userId = req?.user?._id;
  const { address } = req.body;

  const response = await checkout({ userId, address });
  res.status(response.statusCode).send(response.data);
});

export default router;
