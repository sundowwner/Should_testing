"use strict";
var express = require("express");
var mongoose = require("mongoose");
var router = express.Router();
var Book = mongoose.model("Book");
router.get("/", function (req, res, next) {
    Book.find({})
        .exec(function (err, books) {
        if (err)
            return next(err);
        res.json(books);
    });
});
module.exports = router;
