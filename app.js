// libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// require routes
const home = require("./routes/customer/home");
// administrator routes
const administratorProductCreate = require("./routes/administrator/product/create");

// use
const app = express();
app.use(express.json());
app.use(cors());

// database
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", function () {
  // console.log("Database is now connected");
});

// routes
app.use(home);
// administrator
app.use(administratorProductCreate);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
