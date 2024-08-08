const User = require("../models/User.js");

function verifyUser(req, res) {
  try {
    if (req.user && req.user.role === role) {
      return next();
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { verifyUser };
