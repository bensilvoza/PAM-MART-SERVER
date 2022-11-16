// libraries
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// require routes
const home = require("./routes/customer/home");
const register = require("./routes/customer/register");
const login = require("./routes/customer/login");
const product = require("./routes/customer/product");
const payment = require("./routes/customer/payment");
const orders = require("./routes/customer/orders");
const review = require("./routes/customer/review");
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
app.use(register);
app.use(login);
app.use(product);
app.use(payment);
app.use(orders);
app.use(review);
// administrator
app.use(administratorProductCreate);

// port
app.listen(process.env.PORT || 5000, function () {
  console.log("server is now running");
  console.log(".");
  console.log(".");
  console.log(".");
});
