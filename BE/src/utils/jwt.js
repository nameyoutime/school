const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
require("dotenv").config();

const secretKey = SECRET_KEY || "your-secret-key";

const authentication = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authentication;
