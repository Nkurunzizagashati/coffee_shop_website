import express from "express";
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/products.js";

const router = express.Router();

router.get("/", getAllProducts);
router.post("/", addProduct);
router.patch("/", updateProduct);
router.delete("/", deleteProduct);

export default router;
