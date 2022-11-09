// libraries
const express = require("express");
const router = express.Router();

// controllers
let { payment } = require("../../controllers/customer/payment");

router.post("/payment", payment);

module.exports = router;
