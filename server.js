const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.json({limit:"30mb", extended:"true"}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

const MONGODB_URI = "mongodb+srv://sam:1234@cluster0.egnhc.mongodb.net/shopdb?retryWrites=true&w=majority"

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI /* || "mongodb://localhost:27017/bookdb" */);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
