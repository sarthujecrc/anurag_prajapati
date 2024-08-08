const { addProducts } = require("./addProductController");
const { deletedProducts } = require("./DeleteProductController");
const { allProducts } = require("./getAllProductController");
const { oneProduct } = require("./getProductController");
const { updatedProducts } = require("./updateProductController");

module.exports = {
  addProducts,
  deletedProducts,
  allProducts,
  oneProduct,
  updatedProducts,
};
