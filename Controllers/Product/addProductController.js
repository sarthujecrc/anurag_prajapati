const Product = require("../../models/Product.js");

async function addProducts(req, res) {
  try {
    const { name, bio, price, category } = req.body;
    if (!name || !bio || !price || !category) {
      return res.status(400).json({ message: "all feids are required" });
    }
    const saveProducts = await new Product({
      name,
      bio,
      price,
      category,
    });
    await saveProducts.save();
    console.log(saveProducts);
    return res.status(200).json({ message: "product is added successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "all fields are required" });
  }
}

module.exports = { addProducts };
