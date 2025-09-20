import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.js";
import cartRoute from "./routes/cartRoute.js"
import { seedInitialProducts } from "./services/productService.js";
import productRoute from "./routes/productRoute.js";
const app = express();
const port = 3001;

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/Amwag")
  .then(() => console.log("Done"))
  .catch((err) => console.log("Error", err));

seedInitialProducts();

app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.listen(port, () => {
  console.log("OK");
});
