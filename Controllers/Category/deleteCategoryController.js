const Category = require("../../models/Category.js");

async function deleteCategory(req, res) {
  try {
    const id = req.params.id;
    const removeCtegory = await Category.findByIdAndDelete(id);
    if (!removeCtegory) {
      return res
        .status(400)
        .json({ message: "category is not deleted successfully" });
    }
    return res
      .status(200)
      .json({ message: "all feilds are deletd successfully" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "category is not deleted successfully" });
  }
}

module.exports = {deleteCategory}