// libraries
const express = require("express");
const router = express.Router();

// controllers
let { product } = require("../../controllers/customer/product");

router.get("/product/:id", product);

module.exports = router;
