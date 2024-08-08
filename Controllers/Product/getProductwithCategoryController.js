const Product = require("../Product/index.js");

async function getProduct(req, res) {
  try {
    const pipeline = [
      {
        $lookup: {
          from: "Category",
          localFields: " category",
          foreignFields: "_id",
          as: "category",
        },
      },
      {
        $unwind: "$category",
      },
      {
        $project: {
          _id: 0,
          name: 1,
        },
      },
    ];
    const Products = await Product.aggregate(pipeline);
    if (!Products) {
      return res.status(400).json({ message: "Products are found" });
    }
    return res.status(200).json({ message: "products are found" });
  } catch (error) {}
}
