'use strict';
var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    publish: Number,
    genre: String
});
exports.Book = mongoose.model('Book', BookSchema);
