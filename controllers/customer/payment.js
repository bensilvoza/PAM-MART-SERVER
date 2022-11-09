// libraries
const { Router } = require("express");
const express = require("express");
const paypal = require("paypal-rest-sdk");

async function payment(req, res) {
  let paymentChannel = req.body.paymentChannel;

  if (paymentChannel === "paypal") {
    let createPaymentJSON = req.body.createPaymentJSON;

    // configure
    paypal.configure({
      mode: "sandbox",
      client_id: process.env.PAYPAL_CLIENT_ID,
      client_secret: process.env.PAYPAL_CLIENT_SECRET,
    });

    // create
    paypal.payment.create(createPaymentJSON, function (error, payment) {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            return res.json({ message: "OK", result: payment.links[i].href });
          }
        }
      }
    });
  }
}

module.exports = {
  payment,
};
