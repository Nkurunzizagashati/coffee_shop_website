import Products from "../models/products.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const addProduct = async (req, res) => {
  const { name, description, price, imageUri } = req.body;
  try {
    const addedProduct = await Products.create({
      name,
      description,
      price,
      imageUri,
    });
    res.status(201).json({ addedProduct: addedProduct });
  } catch (error) {
    res.status(401).json({ error: error.message });
    console.error(error);
  }
};

const updateProduct = async (req, res) => {
  const { name } = req.query;
  const updateFields = req.body;
  try {
    const updatedProduct = await Products.findOneAndUpdate(
      { name },
      {
        $set: updateFields,
      },
      {
        new: true,
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ error: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { name } = req.query;
  try {
    const deletedProduct = await Products.findOneAndDelete({ name });

    if (!deletedProduct) {
      res.status(404).json({ error: "Product not found" });
    }
    res.status(204).json({ message: "product deleted successfully!" });
  } catch (error) {
    console.error("failed to delete a product");
    res.status(403).json({ error: error });
  }
};

export { getAllProducts, addProduct, updateProduct, deleteProduct };
