let mongoose = require("mongoose");

// product
let productSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  image: String,
  description: String,
  quantity: Number,
});

let Product = mongoose.model("Product", productSchema);

module.exports = Product;
