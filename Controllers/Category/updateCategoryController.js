const Category = require("../../models/Category.js");

async function updatedCategory(req, res) {
  try {
    const id = req.params.id;
    const updateUser = await Category.findByIdAndUpdate(id, req.body);
    if (!updatedUser) {
      return res
        .status(400)
        .json({ message: "user is not updated successfully" });
    }
    return res.status(200).json({ message: "user is updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { updatedCategory };