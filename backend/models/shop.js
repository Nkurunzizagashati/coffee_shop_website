import mongoose from "mongoose";

const ShopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    openingTime: {
      type: String,
      required: true,
      default: "8:00",
    },
    closingTime: {
      type: String,
      required: true,
      default: "22:00",
    },

    workingDays: {
      type: String,
      required: true,
      default: "7",
    },
  },
  { timestamps: true }
);

const Shop = mongoose.model("shop", ShopSchema);

export default Shop;
