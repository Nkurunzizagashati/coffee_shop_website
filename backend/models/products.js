import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  imageUri: {
    type: String,
    required: true,
  },
});

const Products = mongoose.model("products", ProductsSchema);

export default Products;
