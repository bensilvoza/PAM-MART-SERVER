// libraries
const express = require("express");

// models
const Product = require("../../models/product");

async function product(req, res) {
  let id = req.params.id;

  let product = await Product.findOne({ id: id });
  res.json({ message: "OK", result: product });
}

module.exports = {
  product,
};
