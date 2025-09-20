import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const validateJWT = (req, res, next) => {
  try {
    const authorizationHeader = req.get("authorization");
    if (!authorizationHeader) {
      return res.status(403).send("Authorization Header was not provided");
    }

    const token = authorizationHeader.split(" ")[1];
    if (!token) {
      return res.status(403).send("Authorization Header was not provided");
    }

    jwt.verify(token, process.env.JWT_SECRET || "", async (err, payload) => {
      try {
        if (err || !payload) {
          return res.status(403).send("Invalid Token");
        }

        const user = await userModel.findOne({ email: payload.email });
        if (!user) {
          return res.status(404).send("User not found");
        }

        req.user = user;
        next();
      } catch (innerErr) {
        res.status(500).send(innerErr.message);
      }
    });
  } catch (outerErr) {
    res.status(500).send(outerErr.message);
  }
};

export default validateJWT;
