import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async ({ firstName, lastName, email, password }) => {
  try {
    const findUser = await userModel.findOne({ email });
    if (findUser) {
      return { data: "User already exists", statusCode: 400 };
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      firstName,
      lastName,
      email,
      password: passwordHash,
    });
    await newUser.save();

    return {
      data: generateJWT({ firstName, lastName, email }),
      statusCode: 200,
    };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

export const login = async ({ email, password }) => {
  try {
    const findUser = await userModel.findOne({ email });
    if (!findUser) {
      return { data: "Incorrect Password or Email", statusCode: 400 };
    }

    const passwordValid = await bcrypt.compare(password, findUser.password);
    if (!passwordValid) {
      return { data: "Incorrect Password or Email", statusCode: 400 };
    }

    return {
      data: generateJWT({
        firstName: findUser.firstName,
        lastName: findUser.lastName,
        email,
      }),
      statusCode: 200,
    };
  } catch (err) {
    return { data: err.message, statusCode: 500 };
  }
};

const generateJWT = (data) => {
  return jwt.sign(data, process.env.JWT_SECRET || "", {
    expiresIn: "1h",
  });
};
