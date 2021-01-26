const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/bookdb");

const bookSeed = [
  {
    id: "72",
    title: "Pride and Prejudice",
    datepublished: "1992",
    publisher: "Wordsworth",
    ISBN: "9781853260001", 
    blurb: "Blurb Blurb Blurb",
    coverURL: "https://i.pinimg.com/564x/82/eb/cf/82ebcf8435a2d403014064eee495d8f2.jpg",
    condition: 2,
    price: 3.00,
    postage: 4.99,
    available: true,
    genre: ["Historical Romance", "Drama", "Satire", "Fiction"],
    author: "Jane Austen",
  },
  {
    id: "78",
    title: "Test",
    datepublished: "1800",
    publisher: "Test",
    ISBN: "3223492384792834", 
    blurb: "Blurb Blurb Blurb",
    coverURL: "Nil",
    condition: 3,
    price: 2.50,
    postage: 4.99,
    available: true,
    genre: ["Test", "Comedy", "Satire", "Non-Fiction"],
    author: "Test",
  },
];

db.Post.remove({})
  .then(() => db.Post.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
