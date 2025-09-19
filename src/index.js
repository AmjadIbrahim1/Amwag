import express from "express";
import mongoose from "mongoose";
import userRoute from "../routes/userRoute.js";

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Amwag")
  .then(() => console.log("Done"))
  .catch((err) => console.log("Error", err));

app.use("/user", userRoute);
app.listen(port, () => {
  console.log("OK");
});
