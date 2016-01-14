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
router.post("/", function (req, res, next) {
    var newBook = new Book(req.body);
    newBook.save(function (err, book) {
        res.send(book);
    });
});
router.delete("/", function (req, res, next) {
    Book.remove({ _id: req.query._id }, function (err, result) {
        res.send({ message: "SUCCESSSS!YAAAY" });
    });
});
module.exports = router;
