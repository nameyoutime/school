const app = require("express");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");
const router = app.Router();
let mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = require("../../schemas/user.schemas");
const ROLE = require("../constant/role");
const roleAuth = require("../utils/roleAuth");
const authentication = require("../utils/jwt");
const UserDB = mongoose.model("User", userSchema);

router.post("/login", async (req, res) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord) {
    return res
      .status(400)
      .json({ message: "UserName and passWord are required" });
  }

  const user = await UserDB.findOne({ userName }).lean().exec();
  if (!user) {
    return res.status(400).json({ message: "Invalid userName or passWord" });
  }

  await bcrypt.compare(passWord, user.passWord, (err, result) => {
    if (err || !result) {
      return res.status(400).json({ message: "Invalid username or passWord" });
    }
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
    res.json({ ...user, token: token });
  });
});

router.post("/register", async (req, res) => {
  const { userName, passWord } = req.body;

  if (!userName || !passWord) {
    return res.status(400).json({ message: "UserName, password are required" });
  }

  // Check if user already exists with mongoose
  const existingUser = await UserDB.findOne({ userName });
  if (existingUser) {
    return res.status(409).json({ message: "Username already exists" });
  }

  bcrypt.hash(passWord, 10, async (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Failed to encrypt password" });
    }

    const user = {
      userName,
      passWord: hashedPassword,
    };
    let result = new UserDB(user);
    await result.save();
    res.status(201).json({ message: "User registered successfully" });
  });
});

router.get(
  "/protected",
  authentication,
  roleAuth(ROLE.ADMIN, ROLE.USER),
  (req, res) => {
    res.json({ message: "Protected admin route accessed successfully" });
  }
);

module.exports = router;
