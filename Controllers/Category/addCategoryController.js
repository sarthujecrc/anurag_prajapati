const Category = require("../../models/Category.js");

async function addCategory(req, res) {
  try {
    const { name } = req.body;
    if (!name) {
      return res.statu(400).json({ message: "field are required" });
    }
    return res.status(200).json({ message: "category is add successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { addCategory };
