const Category = require("../../models/Category.js");

async function oneCategory(req, res) {
  try {
    const id = req.params.id;
    const category = await category.findById(id);
    if (!category) {
      return res.status(400).json({ message: " Categiry is not found" });
    }
    return res.status(200).json({ message: "Category is found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {oneCategory}