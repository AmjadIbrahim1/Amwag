import express from "express";
import { login, register } from "../services/userService.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const { data, statusCode } = await register({
      firstName,
      lastName,
      email,
      password,
    });
    res.status(statusCode).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const { data, statusCode } = await login({
      email,
      password,
    });
    res.status(statusCode).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
});

export default router;
