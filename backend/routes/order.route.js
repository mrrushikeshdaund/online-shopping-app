const express = require("express");
const orderModel = require("../models/order.model");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const allOrders = await orderModel.find();
    res.status(200).json({ msg: "Data Fetch Successfully", data: allOrders });
  } catch (error) {
    res.status(500).json({ msg: "Data is not Found", error: error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const { userId, products, totalAmount, paymentMethod, deliveryAddress } =
      req.body;

    // Basic validation
    if (
      !userId ||
      !products ||
      !totalAmount ||
      !paymentMethod ||
      !deliveryAddress
    ) {
      return res
        .status(400)
        .json({ msg: "All required fields must be provided." });
    }

    const newOrder = new orderModel({
      userId,
      products,
      totalAmount,
      paymentMethod,
      deliveryAddress,
    });

    await newOrder.save();

    res.status(201).json({
      msg: "Order created successfully",
      data: newOrder,
    });
  } catch (error) {
    res.status(500).json({ msg: "Order Not Created ", error: error });
  }
});

router.put("/update", async (req, res) => {});

module.exports = router;
