
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const uuidv4 = require("uuid")

const BookSchema = new Schema({
    title: { type: String},
    datepublished: { type: Date, default: Date.now },
    publisher: { type: String },
    ISBN: { type: String }, 
    keywords: {Array},
    blurb: { type: String},
    coverURL: {type: String },
    condition: {type: Number },
    price: {type: Number},
    postage: {type: Number},
    available: {type: Boolean},
    genre: { type: String },
    author: [{
      type: Schema.Types.ObjectId,
      ref: "Book"
    }]
  
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
