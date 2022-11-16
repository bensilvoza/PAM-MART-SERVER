let mongoose = require("mongoose");

let peopleWhoLikeSchema = new mongoose.Schema({
  name: String,
});

let descriptionSchema = new mongoose.Schema({
  name: String,
  description: String,
  peopleWhoLike: [peopleWhoLikeSchema],
});

// product
let reviewSchema = new mongoose.Schema({
  productId: String,
  review: [descriptionSchema],
});

let Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
