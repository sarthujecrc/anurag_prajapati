const { addCategory } = require("./addCategoryController");
const { deleteCategory } = require("./deleteCategoryController");
const { allCategory } = require("./getAllCategoryController");
const { oneCategory } = require("./getCategoryController");
const { finalCategory } = require("./searchCategoryController");
const { updatedCategory } = require("./updateCategoryController");

module.exports = {
  addCategory,
  deleteCategory,
  allCategory,
  oneCategory,
  finalCategory,
  updatedCategory,
};
