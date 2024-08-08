const Products = require("../../models/Product.js");

async function allProducts(req, res) {
  try {
    const allProducts = await Products.find();
    if (!allProducts) {
      return res.status(400).json({ message: "all feilds are required" });
    }
    return res.status(200).json({ message: "products are found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { allProducts };
