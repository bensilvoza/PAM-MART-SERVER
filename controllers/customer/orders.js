// libraries
const express = require("express");

// models
const Orders = require("../../models/orders");

async function orders(req, res) {
  let orderInformation = req.body;

  let dbResponse = await Orders.findOne({ name: orderInformation["name"] });

  if (dbResponse === null) {
    // create order
    dbResponse = new Orders(orderInformation);
    dbResponse.save();
  } else {
    // push order
    dbResponse.orders.push(...orderInformation.orders);

    // update orders
    await Orders.findOneAndUpdate(
      { name: orderInformation["name"] },
      dbResponse
    );
  }

  return;
}

module.exports = {
  orders,
};
