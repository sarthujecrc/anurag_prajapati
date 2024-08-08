const User = require("../../models/User.js");

async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const isemail = await User.findOne({ email });
    if (isemail) {
      return res.status(400).json({ message: "email already exist" });
    }
    const user = await User.create({
      name,
      email,
      password,
    });
    await user.save();
    console.log(user);
    return res
      .status(200)
      .json({ messsage: "user is register successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { registerUser };
