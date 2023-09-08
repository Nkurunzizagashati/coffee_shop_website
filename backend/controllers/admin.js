import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      res.status(404).json({ error: "Incorrect email or password" });
    }

    const token = await jwt.sign(
      { adminId: admin._id },
      process.env.JWT_SECRET
    );

    const passwordsMatches = await bcrypt.compare(password, admin.password);
    if (passwordsMatches) res.status(200).json({ message: token });
    else {
      console.log("Incorect password");
      res.status(403).json({ error: "Incorrect email or password" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(403).json({ error: error.message });
  }
};

export { registerAdminAccount, loginAdmin };
