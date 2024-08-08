const Products = require("../../models/Product.js");

async function finalProduct(req, res) {
  try {
    const { name, bio, price, category } = req.body;
    const nameRegex = new RegExp(name, "i");
    const bioRegex = new RegExp(bio, "i");
    const query = { name: nameRegex, bio: bioRegex };
    if (price) {
      query.price = price;
    }
    if (category) {
      query.category = category;
    }
    const finalResult = await Products.find(query);
    if (!finalResult) {
      return res
        .status(400)
        .json({ message: "Product is not quered successfully" });
    }
    return res
      .status(200)
      .json({ message: "products are searched successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}
module.exports = { finalProduct };
