const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/countdb");
mongoose.connect("mongodb+srv://sam:1234@cluster0.egnhc.mongodb.net/userdb?retryWrites=true&w=majority")

const userSeed = [
  {
    email: "bebop@gmail.com",
    password: "Beebop",
    count: 14,
    date: new Date(Date.now())
  },
  {
    email: "seconduser@gmail.com",
    password: "22",
    count: 16,
    date: new Date(Date.now())
  },
  {
    email: "bebop@gmail.com",
    password: "Beebop",
    count: 6,
    date: new Date(Date.now() - 86400000)
  }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
