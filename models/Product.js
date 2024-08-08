const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    bio: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    category: {
      type:mongoose.Schema.Types.ObjectId,
      enum: ["shirt", "shoes", "clothes"],
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
