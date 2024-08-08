const Products = require("../../models/Product.js");

async function deletedProducts(req, res) {
  try {
    const id = req.params.id;
    const removeProducts = await Products.findByIdAndDelete(id);
    if (!removeProducts) {
      return res
        .status(400)
        .json({ message: "Products is not deleted successfully" });
    }
    return res
      .status(200)
      .json({ messsage: "product is deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "product is deleted successfully" });
  }
}

module.exports = { deletedProducts };
