import productModel from "../models/productModel.js";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  const products = [
    { title: "title1", image: "image1", price: "50", stock: "120" },
    { title: "title1", image: "image1", price: "50", stock: "120" },
    { title: "title1", image: "image1", price: "50", stock: "120" },
    { title: "title1", image: "image1", price: "50", stock: "120" },
    { title: "title1", image: "image1", price: "50", stock: "120" },
    { title: "title1", image: "image1", price: "50", stock: "120" },
    { title: "title1", image: "image1", price: "50", stock: "120" },
  ];

  const nowProducts = await getAllProducts();
  if (nowProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
