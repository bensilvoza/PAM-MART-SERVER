// libraries
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// models
const Customer = require("../../models/customer");

async function login(req, res) {
  let plainPassword = req.body.password;

  let customer = await Customer.findOne({ email: req.body.email });

  if (customer === null) {
    // incorrect credentials
    res.json({ message: "ERROR" });
    return;
  }

  // hash
  let hashPassword = customer["password"];

  const match = await bcrypt.compare(plainPassword, hashPassword);

  if (match) {
    // create authorization token
    let jwtSecretKey = process.env.JWT_SECRET_KEY;
    jwt.sign({ id: customer["id"] }, jwtSecretKey, (error, token) => {
      if (error) {
        res.json({ message: "ERROR" });
        return;
      } else {
        // remove password in customer before sending data to client
        delete customer["password"];

        res.json({
          token: token,
          customer: customer,
          message: "OK",
        });
        return;
      }
    });
  } else {
    // incorrect credentials
    res.json({ message: "ERROR" });
  }
}

module.exports = {
  login,
};
