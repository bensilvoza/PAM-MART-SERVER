let mongoose = require("mongoose");

// customer
let customerSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
});

let Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
