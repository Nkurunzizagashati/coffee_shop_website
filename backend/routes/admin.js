import express from "express";
import { loginAdmin, registerAdminAccount } from "../controllers/admin.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello from backend admin");
});
router.post("/", loginAdmin);
router.post("/create-admin-account", registerAdminAccount);

export default router;
