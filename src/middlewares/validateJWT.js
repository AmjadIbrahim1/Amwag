import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
const validateJWT = (req, res, next) => {
  const authorizationHeader = req.get("authorization");
  if (!authorizationHeader) {
    res.status(403).send("Authorization Header was not provided");
    return;
  }
  const token = authorizationHeader.split(" ")[1];
  if (!token) {
    res.status(403).send("Authorization Header was not provided");
    return;
  }
  jwt.verify(
    token,
    "5adDHzTXw1owqx8MLM4btYcguKm8Eyw2",
    async (err, payload) => {
      if (err || !payload) {
        res.status(403).send("Invalid Token");
        return;
      }
      const user = await userModel.findOne({ email: payload.email });
      req.user = user;
      next();
    }
  );
};
export default validateJWT;
