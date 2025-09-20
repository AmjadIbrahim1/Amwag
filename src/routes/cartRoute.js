import express from "express";
import getActiveCartForUser from "../services/cartService.js";
import validateJWT from "../middlewares/validateJWT.js";
const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  const id = req?.user?._id;
  const cart = await getActiveCartForUser({ userId: id });
  res.status(200).send(cart);
});

router.post("/items", validateJWT, async (req, res) => {
  const id = req?.user?._id;
  const { product, quantity } = req.body;

  const response = await addItemToCart({
    userId: id,
    productId: product,
    quantity,
  });
  res.status(response.statusCode).send(response.data);
});

router.put("/items", validateJWT, async (req, res) => {
  const id = req?.user?._id;
  const { product, quantity } = req.body;
  const response = await updateItemInCart({ userId, productId, quantity });
  req.status(response.statusCode).send(response.data);
});
export default router;
