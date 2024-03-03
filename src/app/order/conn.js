import mongoose from "mongoose";

export const orderModel = mongoose.Schema({
  name: String,
  contactNo: Number,
  date: String,
  flavour: String,
  size: String,
  shape: String
});

export const Order = mongoose.model("orders", orderModel);
