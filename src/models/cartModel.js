import mongoose, { Schema } from "mongoose";

const cartItemSchema = new mongoose.Schema({
  title: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true, default: 1 },
  unitPrice: { type: Number, required: true },
});
const cartSchema = new mongoose.Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  items: [cartItemSchema],
  totalAmount: { type: Number, required: true },
  status: { type: String },
});

export const cartModel = mongoose.model("Cart", cartSchema);
