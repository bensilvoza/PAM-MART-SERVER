// libraries
const express = require("express");
const router = express.Router();

// controllers
let { home } = require("../../controllers/customer/home");

router.get("/", home);

module.exports = router;
