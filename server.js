const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const routes = require("./routes");
const bodyParser = require("body-parser");
const User = require("./models/user")

const app = express();
const PORT = process.env.PORT || 8000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({
  origin: "http://localhost:3000", //location of react app
  credentials: true
}))
app.use(session({
  secret: "secretCode",
  resave: true,
  saveUninitialized: true
}))
app.use(cookieParser("secretCode"))


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
/* app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html")); */

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/countdb");
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://sam:1234@cluster0.egnhc.mongodb.net/userdb?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
