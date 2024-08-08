const User = require("../../models/User.js");
const bcrypt = require("bcrypt");
const config = require("../../config/default.js");
const jwt = require("jsonwebtoken");
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!email) {
      return res.status(400).json({ message: "email is required" });
    }
    const ispassword = await bcrypt.compare(password, user.pasword);
    if (!ispassword) {
      return res.status(400).json({ message: "password not matched" });
    }
    const token = jwt.sign(
      {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      config.SECRET_KEY,
      { expiresIn:"7D"}
    );
    return res.status(200).json({ message: "user can accessed tokens" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = {loginUser}