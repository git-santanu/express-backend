const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key_here";

const AuthenicateToken = (req, res, next) => {
  try {
    const header = req.headers["authorization"];
    const token = header && header.split(" ")[1];
    if (!token) return res.status(403).json({ error: "token required" });
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ error: "invalid token" });
      console.log("Decoded token:", user)
      req.user = user;
      next();
    });
  } catch (error) {
    console.log("something went wrong", error);
  }
};
module.exports = { AuthenicateToken };
