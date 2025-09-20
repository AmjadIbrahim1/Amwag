import { cartModel } from "../models/cartModel.js";
import productModel from "../models/productModel.js";

const createCartForUser = async ({ userId }) => {
  const cart = await cartModel.create({
    userId,
    totalAmount: 0,
    status: "active",
  });
  return cart;
};

const getActiveCartForUser = async ({ userId }) => {
  let cart = await cartModel.findOne({ userId, status: "active" });
  if (!cart) {
    cart = await createCartForUser({ userId });
  }
  return cart;
};

export const addItemToCart = async ({ productId, quantity, userId }) => {
  const cart = await getActiveCartForUser({ userId });

  const qty = parseInt(quantity);
  if (isNaN(qty) || qty <= 0) {
    return { data: "Invalid quantity", statusCode: 400 };
  }

  const existsInCart = cart.items.find(
    (p) => p.product.toString() === productId.toString()
  );

  const product = await productModel.findById(productId);
  if (!product) {
    return { data: "Product Not Found", statusCode: 400 };
  }

  if (product.stock < qty) {
    return { data: "Low stock for item", statusCode: 400 };
  }

  if (existsInCart) {
    existsInCart.quantity += qty;
    cart.totalAmount += product.price * qty;
  } else {
    cart.items.push({
      product: productId,
      unitPrice: product.price,
      quantity: qty,
    });
    cart.totalAmount += product.price * qty;
  }

  await cart.save();
  return { data: cart, statusCode: 200 };
};

export default getActiveCartForUser;
