import express from "express";
import {
  getProfile,
  registerShop,
  updateProfile,
} from "../controllers/shop.js";

const router = express.Router();

router.get("/", getProfile);
router.put("/", registerShop);
router.patch("/", updateProfile);

export default router;
