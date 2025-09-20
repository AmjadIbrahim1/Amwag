import express from "express";
import getActiveCartForUser from "../services/cartService.js";
import validateJWT from "../middlewares/validateJWT.js";
const router = express.Router();

router.get("/", validateJWT, async (req, res) => {
  const id = req.user._id;
  const cart = await getActiveCartForUser({ userId: id });
  res.status(200).send(cart);
});

export default router