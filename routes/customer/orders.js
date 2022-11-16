// libraries
const express = require("express");
const router = express.Router();

// controllers
let { orders } = require("../../controllers/customer/orders");

router.post("/orders", orders);

module.exports = router;
