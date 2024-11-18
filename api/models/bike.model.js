import mongoose from "mongoose";

const bikeSchema = new mongoose.Schema({
  bike_name: {
    type: String,
    required: true
  },
  bike_image: {
    type: String, 
    required: true
  },
  bike_price: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Bike'], 
    required: true
  },
  year: {
    type: String,
    required: true
  },
  engine_capacity: {
    type: String,
    required: true
  },
  fuel_type: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true
  },
  top_speed: {
    type: String,
    required: true
  },
  bike_mileage: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  video_url: {
    type: String,
    required: true
  },
  features: {
    type: [String],
    required: true
  }
});

const Bike = mongoose.model('Bike', bikeSchema);

export  {Bike};

