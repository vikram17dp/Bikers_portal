import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";


const loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASSWORD
      ) {
        const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });
        res.json({ success: true, token });
      } else {
        res.json({ success: false, message: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: error.message });
    }
  };