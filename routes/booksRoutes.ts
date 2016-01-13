"use strict";

import express = require("express");
let mongoose = require("mongoose");
let router = express.Router();
let Book = mongoose.model("Book");

router.get("/", (req,res,next) => {

Book.find({})
    .exec((err, books) => {
        if (err) return next(err);
        res.json(books);
    });

});

export = router;
