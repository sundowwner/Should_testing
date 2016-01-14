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

router.post("/", (req, res, next) =>{
    let newBook = new Book(req.body);
    newBook.save((err, book) =>{
        res.send(book);
    });
});

router.delete("/", (req, res, next) => {

    Book.remove({_id: req.query._id}, (err, result)=>{
        res.send({message: "SUCCESSSS!YAAAY"});
    });
})

export = router;
