const { urlencoded } = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uuidv4 = require("uuid/v4")

const BookSchema = new Schema({
  book : [{
    title: { type: String, required: true },
    datepublished: { type: Date, default: Date.now },
    publisher: { type: String, required: true },
    ISBN: { type: String, required: true }, 
    keywords: {Array, requied: true },
    blurb: { type: String, required: true },
    coverURL: {type: urlencoded },
    condition: {type: Number },
    price: {type: Number, required:true },
    postage: {type: Number, required: true },
    available: {type: Boolean, default:true },
  }],
  author: [{
    name: { type: String, required: true },
    bio: { type: String,},
    genre: {Array},
  }],
  genre: [{
    type: { type: String, required: true },
  }],
  user:[{
    userID: {uuid4()},
    username:{type:String},
    password:{type:String},
    name: {type:String},
    email: {type:String},
    address: [{
      aptno: {type:String},
      streetno: {type:String},
      streetname: {type:String},
      suburb: {type:String},
      postcode: {type:String},
      country: {type:String},
    }],
    posted: {type: Boolean, default: false},
    purchased: {type:Boolean, default: true}
  }]

});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
