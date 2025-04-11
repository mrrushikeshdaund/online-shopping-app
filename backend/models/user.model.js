const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    address: [
      {
        street: String,
        city: String,
        state: String,
        zip: String,
        country: String,
      },
    ],
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

const userModel = mongoose.model("Users", userSchema);

module.exports = userModel;
