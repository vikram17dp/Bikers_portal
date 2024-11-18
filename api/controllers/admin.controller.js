import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import Bike from '../models/bike.model.js'

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


const addBike = async (req, res) => {
  try {
    const {
      bike_name,
      bike_price,
      brand,
      category,
      year,
      engine_capacity,
      fuel_type,
      weight,
      top_speed,
      bike_mileage,
      description,
      video_url,
      features,
    } = req.body;

    const imagefile = req.file; 

    if (
      !bike_name ||
      !bike_price ||
      !brand ||
      !category ||
      !year ||
      !engine_capacity ||
      !fuel_type ||
      !weight ||
      !top_speed ||
      !bike_mileage ||
      !description ||
      !video_url ||
      !features
    ) {
      return res.json({ success: false, message: "Missing Details" });
    }

    if (!validator.isURL(video_url)) {
      return res.json({ success: false, message: "Invalid Video URL" });
    }

    if (imagefile) {
      const imageUpload = await cloudinary.uploader.upload(imagefile.path, {
        resource_type: "image",
      });
      const imageUrl = imageUpload.secure_url;

      const bikeData = {
        bike_name,
        bike_image: imageUrl,
        bike_price,
        brand,
        category,
        year,
        engine_capacity,
        fuel_type,
        weight,
        top_speed,
        bike_mileage,
        description,
        video_url,
        features,
      };

      const newBike = new Bike(bikeData);

      await newBike.save();
      res.json({ success: true, message: "Bike Added Successfully" });
    } else {
      res.json({ success: false, message: "Image Upload Failed" });
    }
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

export default addBike;
