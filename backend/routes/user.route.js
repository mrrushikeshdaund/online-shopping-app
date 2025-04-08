const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcrypt = require("bcrypt");
require("dotenv").config();

router.post("/signup", async (req, res) => {
  try {
    const { userName, password, email } = req.body;
    const exists = await userModel.findOne({ userName });
    if (exists) return res.status(400).json({ msg: "User already exists" });
    const hasedPassword = await bcrypt.hash(password, 3);
    let newuserObj = {
      userName: userName,
      password: hasedPassword,
      email: email,
    };
    const newUser = new userModel(newuserObj);
    await newUser.save();
    res.status(200).json({ msg: "User Created" });
  } catch (error) {
    res.status(500).json({ msg: "Not Found", error: error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    const userObj = await userModel.findOne({ userName });
    if (!userObj) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, userObj.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const payload = {
      id: userObj._id,
      userName: userObj.userName,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ msg: "Login successful", token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Server Error" });
  }
});

router.get("/all", async (req, res) => {
  try {
    const allUser = await userModel.find();
    res.status(200).json({ msg: "Get the Data ", data: allUser });
  } catch (error) {
    res.status(500).json({ msg: "Data Not Found", error: error });
  }
});
module.exports = router;
