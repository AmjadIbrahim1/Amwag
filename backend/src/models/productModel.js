import mongoose from "mongoose";

const productShcema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const productModel = mongoose.model("Product", productShcema);

export default productModel;
