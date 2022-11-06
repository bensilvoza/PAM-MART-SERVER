// libraries
const express = require("express");
const router = express.Router();

// controllers
let { create } = require("../../../controllers/administrator/product/create");

router.post("/administrator/product/create", create);

module.exports = router;
