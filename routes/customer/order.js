// libraries
const express = require("express");
const router = express.Router();

// controllers
let { order } = require("../../controllers/customer/order");

router.post("/order", order);

module.exports = router;
