import mongoose, { Schema } from "mongoose";

const cartItemSchema = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true, default: 1, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const cartSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: { type: [cartItemSchema], default: [] },
    totalAmount: { type: Number, required: true, default: 0, min: 0 },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

export const cartModel = mongoose.model("Cart", cartSchema);
