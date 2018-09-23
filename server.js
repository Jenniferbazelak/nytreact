const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Initialize Express
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


//set up database with mongoose
//DB config
const dbURI = "mongodb://localhost/nytreact";

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
}
else {
    mongoose.connect(dbURI)
}

// Connect to db
const db = mongoose.connection;
db.on('error', function (err) {
  console.log("-----Mongoose error: -----\n" + err);
});
db.once('open', function () {
  console.log("Mongoose connected successfully");
});


//require routes

// Routing
// app.use("/", htmlroutes);
// app.use("/saved", );


// Listen on port 3000
app.listen(PORT, function () {
  console.log("App running on port 3000!");
});
