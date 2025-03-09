var express = require("express");
var router = express.Router();
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

var userModel = require("../models/user.model");
var JWT_SECRET = process.env.JWT_SECRET;

// POST Register user
router.post("/register", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });
    const hashedpassword = await bcrypt.hash(password, 10);

    const newUser = new userModel({
      username,
      email,
      password: hashedpassword,
    });
    await newUser.save();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* POST users login. */
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Not found User" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(500).json({ message: "Invalid User " });
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* GET users listing. */
router.get("/list", async function (req, res, next) {
  try {
    const getAllUser = await userModel.find();
    res.send({
      status: 200,
      message: "users retrieved successfully",
      data: getAllUser,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
