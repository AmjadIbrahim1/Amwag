import { cartModel } from "../models/cartModel.js";
import productModel from "../models/productModel.js";
import { orderModel } from "../models/orderModel.js";

const createCartForUser = async ({ userId }) => {
  return await cartModel.create({
    userId,
    totalAmount: 0,
    status: "active",
  });
};

export const getActiveCartForUser = async ({ userId }) => {
  try {
    let cart = await cartModel.findOne({ userId, status: "active" });
    if (!cart) {
      cart = await createCartForUser({ userId });
    }
    return cart;
  } catch (err) {
    throw new Error("Failed to get active cart: " + err.message);
  }
};

export const clearCart = async ({ userId }) => {
  try {
    const cart = await getActiveCartForUser({ userId });
    cart.items = [];
    cart.totalAmount = 0;
    const updatedCart = await cart.save();
    return { data: updatedCart, statusCode: 200 };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

export const addItemToCart = async ({ productId, quantity, userId }) => {
  try {
    const cart = await getActiveCartForUser({ userId });
    const parsedQuantity = parseInt(quantity);

    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return { data: "Invalid quantity", statusCode: 400 };
    }

    const foundProduct = await productModel.findById(productId);
    if (!foundProduct) {
      return { data: "Product not found", statusCode: 400 };
    }

    if (foundProduct.stock < parsedQuantity) {
      return { data: "Low stock for item", statusCode: 400 };
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId.toString()
    );

    if (existingItem) {
      existingItem.quantity += parsedQuantity;
    } else {
      cart.items.push({
        product: productId,
        unitPrice: foundProduct.price,
        quantity: parsedQuantity,
      });
    }

    cart.totalAmount += foundProduct.price * parsedQuantity;
    await cart.save();

    return { data: cart, statusCode: 200 };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

export const updateItemInCart = async ({ productId, quantity, userId }) => {
  try {
    const cart = await getActiveCartForUser({ userId });
    const parsedQuantity = parseInt(quantity);

    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return { data: "Invalid quantity", statusCode: 400 };
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId.toString()
    );
    if (!existingItem) {
      return { data: "Item does not exist in cart", statusCode: 400 };
    }

    const foundProduct = await productModel.findById(productId);
    if (!foundProduct) {
      return { data: "Product not found", statusCode: 400 };
    }

    if (foundProduct.stock < parsedQuantity) {
      return { data: "Low stock for item", statusCode: 400 };
    }

    const otherCartItems = cart.items.filter(
      (item) => item.product.toString() !== productId.toString()
    );

    let total = calculateCartTotalItems({ cartItems: otherCartItems });
    existingItem.quantity = parsedQuantity;
    total += existingItem.quantity * existingItem.unitPrice;

    cart.totalAmount = total;
    const updatedCart = await cart.save();

    return { data: updatedCart, statusCode: 200 };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

export const deleteItemInCart = async ({ userId, productId }) => {
  try {
    const cart = await getActiveCartForUser({ userId });

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId.toString()
    );
    if (!existingItem) {
      return { data: "Item does not exist in cart", statusCode: 400 };
    }

    const otherCartItems = cart.items.filter(
      (item) => item.product.toString() !== productId.toString()
    );

    cart.items = otherCartItems;
    cart.totalAmount = calculateCartTotalItems({ cartItems: otherCartItems });

    const updatedCart = await cart.save();
    return { data: updatedCart, statusCode: 200 };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

export const checkout = async ({ userId, address }) => {
  try {
    if (!address) {
      return { data: "Please add the address", statusCode: 400 };
    }

    const cart = await getActiveCartForUser({ userId });
    if (cart.items.length === 0) {
      return { data: "Cart is empty", statusCode: 400 };
    }

    const orderItems = [];
    for (let item of cart.items) {
      const product = await productModel.findById(item.product);
      if (!product) {
        return { data: "Product not found", statusCode: 400 };
      }
      orderItems.push({
        productTitle: product.title,
        productImage: product.image,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
      });
    }

    const order = await orderModel.create({
      orderItems,
      total: cart.totalAmount,
      address,
      userId,
    });

    cart.status = "completed";
    await cart.save();

    return { data: order, statusCode: 200 };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

const calculateCartTotalItems = ({ cartItems }) => {
  return cartItems.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
};
