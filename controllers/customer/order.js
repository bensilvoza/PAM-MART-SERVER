// libraries
const express = require("express");

// models
const Order = require("../../models/order");

async function order(req, res) {
  let summary = req.body;

  // let order = Order.findOne({ name: summary["name"] });

  // console.log(order);

  // continue here...

  if (order === "TEST") {
    // create order
    order = new Order(summary);
    console.log(order);
    await order.save();
  }
}

module.exports = {
  order,
};
