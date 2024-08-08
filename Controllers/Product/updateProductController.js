const Products = require("../../models/Product.js");

async function updatedProducts(req, res) {
  try {
    const id = req.params.id;
    const updatedUser = await Products.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res
        .status(400)
        .json({ message: "user is not updated suucessfully" });
    }
    return res.status(200).json({ message: "user is updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}
module.exports = { updatedProducts };
