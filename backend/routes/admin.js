import express from "express";
import { registerAdminAccount } from "../controllers/admin.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hello from backend admin");
});
router.post("/create-admin-account", registerAdminAccount);

export default router;
