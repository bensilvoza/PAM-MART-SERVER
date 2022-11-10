let mongoose = require("mongoose");

let itemSchema = new mongoose.Schema({
  id: String,
  image: String,
  name: String,
  price: Number,
  quantity: Number,
  total: Number,
});

let itemsSchema = new mongoose.Schema({ items: [itemSchema] });

let addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  province: String,
  country: String,
});

let summarySchema = new mongoose.Schema({
  address: addressSchema,
  items: [itemsSchema],
});

// orderSchema would look like,
// { name: "Ben", order: [[summarySchema], [summarySchema], [summarySchema]], channel: "paypal" }

// order
let orderSchema = new mongoose.Schema({
  name: String,
  order: [summarySchema],
  channel: String, // payment method
});

let Order = mongoose.model("Order", orderSchema);

module.exports = Order;
