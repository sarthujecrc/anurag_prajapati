const Category = require("../../models/Category.js");

async function finalCategory(req, res) {
  try {
    const { name } = req.query;
    const nameRegex = new RegExp(name, "i");
    const query = { name: nameRegex };
    const finalResult = await Category.find(query);
    if (!finalResult) {
      return res.status(400).json({ message: " Category is not found" });
    }
    return res.status(200).json({ message: " Catgory is quered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { finalCategory};
