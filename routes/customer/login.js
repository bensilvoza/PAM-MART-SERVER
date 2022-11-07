// libraries
const express = require("express");
const router = express.Router();

// controllers
let { login } = require("../../controllers/customer/login");

router.post("/login", login);

module.exports = router;
