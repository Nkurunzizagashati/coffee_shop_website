import Shop from "../models/shop.js";

const getProfile = async (req, res) => {
  try {
    const shopProfile = await Shop.find({});
    if (!shopProfile) {
      res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({ message: shopProfile });
  } catch (error) {
    console.error("can't get your profile");
    res.status(400).json({ error: error.message });
  }
};

const registerShop = async (req, res) => {
  const {
    name,
    email,
    phone,
    location,
    openingTime,
    closingTime,
    workingDays,
  } = req.body;

  try {
    const shop = await Shop.create({
      name,
      email,
      phone,
      location,
      openingTime,
      closingTime,
      workingDays,
    });

    res.status(201).json({ message: shop });
  } catch (error) {
    console.error("failed to register a shop");
    res.status(401).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { email } = req.query;
  try {
    const updatedProfile = await Shop.findOneAndUpdate({ email }, req.body, {
      new: true,
    });
    if (!profile) {
      res.status(404).json({ error: "Profile not found" });
    }

    res.status(200).json({ message: updateProfile });
  } catch (error) {
    console.error("failed to update your profile");
    res.status(500).json({ error: error.message });
  }
};

export { getProfile, registerShop, updateProfile };
