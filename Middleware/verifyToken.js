const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization?.split("Bearer")[1];
    if (!token) {
      return res.status(400).json({ message: "no token is provided" });
    }
    return res.status(200).json({ message: "token is verifed" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "internal server error" });
  }
}

module.exports = { verifyToken };
