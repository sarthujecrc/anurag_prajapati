const Category = require("../../models/Category.js");

async function allCategory(req, res) {
  try {
    const users = await Category.find();
    if (!users) {
      return res.status(400).json({ message: "users is not found" });
    }
    return res.status(200).json({ message: "category is found" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { allCategory };
