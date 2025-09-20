import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema(
  {
    productTitle: { type: String, required: true },
    productImage: { type: String },
    quantity: { type: Number, required: true, min: 1 },
    unitPrice: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const orderSchema = new Schema(
  {
    orderItems: { type: [orderItemSchema], required: true },
    total: { type: Number, required: true, min: 0 },
    address: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("Order", orderSchema);
