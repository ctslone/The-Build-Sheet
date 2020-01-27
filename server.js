// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongojs = require("mongojs");
var mongoose = require("mongoose");

// Initialize Express
var app = express();

// models
// var db = require("./models")

// server
var PORT = process.env.PORT || 3000;

// setting up static folder for public html and css AND parsing req body as JSON
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setting up handlebars main view
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connect to mongoDB using mongoose
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/buildsheetdb"
mongoose.connect(MONGODB_URI);

app.get("/", function(req, res) {
    res.render("index")
})

app.listen(PORT, function () {
    console.log("App running on port 3000!");
});