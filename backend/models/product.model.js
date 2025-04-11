const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: String, required: true },
    sex: { type: String, enum: ["Male", "Female", "Unisex"], required: true },
    size: [{ type: String }], // e.g., ['S', 'M', 'L', 'XL']
    color: { type: String, required: true },
    brand: { type: String, required: true },
    rating: { type: Number, default: 0 }, // avg rating
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comment: String,
        rating: Number,
        createdAt: { type: Date, default: Date.now },
      },
    ],
    offerPrice: { type: Number, required: true },
    stock: { type: Number, required: true },
    imageUrl: [{ type: String }], // multiple images
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const productModel = mongoose.model("Products", productSchema);

module.exports = productModel;
