// libraries
const express = require("express");
const router = express.Router();

// controllers
let { productReview, review } = require("../../controllers/customer/review");

// get all product review
router.get("/product/review/:id", productReview);

router.post("/product/review", review);

module.exports = router;
