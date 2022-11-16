let mongoose = require("mongoose");

let summarySchema = new mongoose.Schema({
  id: String,
  timeStampInSeconds: Number,
  image: String,
  name: String,
  price: Number,
  quantity: Number,
  total: Number,
});

let addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  province: String,
  country: String,
});

// orderSchema would look like,
// { name: "Ben", orders: [[summarySchema], [summarySchema]], address: {}, channel: "paypal" }

// order
let ordersSchema = new mongoose.Schema({
  name: String,
  orders: [summarySchema],
  address: addressSchema,
  channel: String, // payment method
});

let Orders = mongoose.model("Orders", ordersSchema);

module.exports = Orders;
