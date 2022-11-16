// libraries
const express = require("express");

// models
const Review = require("../../models/review");

async function productReview(req, res) {
  let id = req.params.id;
  let dbResponse = await Review.findOne({ productId: id });

  return res.json({ result: dbResponse });
}

async function review(req, res) {
  let dbResponse = await Review.findOne({ productId: req.body.productId });

  // addReview method
  if (req.body.method === "addReview") {
    if (dbResponse === null) {
      // create review
      // review information
      let information = new Review({
        productId: req.body.productId,
        review: [
          {
            name: req.body.name,
            description: req.body.description,
            peopleWhoLike: [],
          },
        ],
      });

      await information.save();
      return res.json({ message: "OK", result: information });
    } else {
      // push review data
      let information = {
        name: req.body.name,
        description: req.body.description,
        peopleWhoLike: [],
      };
      dbResponse.review.push(information);

      let updatedReview = await Review.findOneAndUpdate(
        { productId: req.body.productId },
        dbResponse
      );

      return res.json({ message: "OK", result: dbResponse });
    }
  }

  // add applaud/like to a review
  if (req.body.method === "addReviewLike") {
    // check if reviewLikerName is already present on the list
    // if present remove reviewLikerName on the list,
    // first loop all data from a list or review
    // and when we find the review that matches from req.body.reviewAuthor
    // that's the time to loop from a list of review likers name and then remove
    // the inserted/duplicated liker name
    for (let i = 0; i < dbResponse.review.length; i++) {
      if (dbResponse["review"][i]["name"] === req.body.reviewAuthor) {
        let listOfPeopleWhoLike = dbResponse["review"][i]["peopleWhoLike"];
        for (let j = 0; j < listOfPeopleWhoLike.length; j++) {
          if (listOfPeopleWhoLike[j]["name"] === req.body.reviewLikerName) {
            listOfPeopleWhoLike.splice(j, 1);

            let updatedReview = await Review.findOneAndUpdate(
              { productId: req.body.productId },
              dbResponse
            );

            return res.json({ message: "OK", result: dbResponse });
          }
        }
      }
    }

    // push reviewLikerName on the list
    for (let desc of dbResponse.review) {
      if (desc["name"] === req.body.reviewAuthor) {
        desc["peopleWhoLike"].push({ name: req.body.reviewLikerName });

        let updatedReview = await Review.findOneAndUpdate(
          { productId: req.body.productId },
          dbResponse
        );

        return res.json({ message: "OK", result: dbResponse });
      }
    }
  }
}

module.exports = {
  productReview,
  review,
};
