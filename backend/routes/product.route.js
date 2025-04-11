const productModel = require("../models/product.model");
const express = require("express");

const router = express.Router();

router.get("/list", async (req, res) => {
  try {
    const allProducts = await productModel.find();
    res.status(200).json({ msg: "Data Found Sucessfully", data: allProducts });
  } catch (error) {
    res.status(500).json({ msg: "Not Found", error: error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const {
      name,
      category,
      sex,
      size,
      price,
      color,
      offerPrice,
      stock,
      brand,
      imageUrl,
    } = req.body;

    // Optional: Validate required fields
    if (
      !name ||
      !category ||
      !sex ||
      !size ||
      !price ||
      !color ||
      !offerPrice ||
      stock == null ||
      !brand ||
      !imageUrl
    ) {
      return res.status(400).json({ msg: "Please fill all required fields" });
    }

    const newProduct = new productModel({
      name,
      category,
      sex,
      size,
      price,
      color,
      offerPrice,
      stock,
      brand,
      imageUrl,
    });

    await newProduct.save();

    res.status(201).json({
      msg: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({
      msg: "Internal Server Error",
      error: error.message,
    });
  }
});

router.put("/update/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const updatedProductObj = req.body;
    const updateData = req.body;

    // Optional: Validate required fields here if needed

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      { $set: updateData },
      { new: true, runValidators: true }
    );
    if (!updatedProduct)
      return res.status(404).json({ msg: "Product not found" });

    res.status(200).json({ msg: "Updated Sucessfully", data: updateData });
  } catch (error) {
    res.status(500).json({ msg: "Not Found", error: error });
  }
});

router.delete("/delete/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const deletedobj = await productModel.findByIdAndDelete(productId);
    if (!deletedobj) return res.status(404).json({ msg: "Incorrect ID" });
    res.status(200).json({ msg: "Product deleted", data: deletedobj });
  } catch (error) {
    res.status(500).json({ msg: "Not Found", error: error });
  }
});

module.exports = router;
