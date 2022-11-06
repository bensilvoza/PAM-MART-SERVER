// libraries
const express = require("express");

// models
const Product = require("../../../models/product");

async function create(req, res) {
  let product = new Product(req.body);

  await product.save();
  res.json({ message: "OK" });
}

module.exports = {
  create,
};
