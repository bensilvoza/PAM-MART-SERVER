// libraries
const express = require("express");

// models
const Product = require("../../models/product");

async function home(req, res) {
  let products = await Product.find();
  res.json({ message: "OK", result: products });
}

module.exports = {
  home,
};
