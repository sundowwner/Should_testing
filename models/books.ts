'use strict';

import mongoose = require('mongoose');
let BookSchema = new mongoose.Schema({

    title: String,
    author: String,
    publish: Number,
    genre: String



});



export let Book = mongoose.model('Book',BookSchema);
