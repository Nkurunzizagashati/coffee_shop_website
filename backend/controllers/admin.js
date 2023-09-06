import express from "express";
import Admin from "../models/admin.js";

const registerAdminAccount = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.create({ email, password });
    res.status(201).json({ message: admin });
  } catch (error) {
    console.error("failed to create an admin account");
    res.status(401).json({
      error: error.message,
    });
  }
};

export { registerAdminAccount };
