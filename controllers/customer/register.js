// libraries
const express = require("express");
const bcrypt = require("bcrypt");

// models
const Customer = require("../../models/customer");

async function register(req, res) {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, async function (error, hash) {
    if (error) {
      res.json({ message: "ERROR" });
    }

    let customer = new Customer(req.body);
    // store hash
    customer["password"] = hash;

    await customer.save();
    res.json({ message: "OK" });
  });
}

module.exports = {
  register,
};
