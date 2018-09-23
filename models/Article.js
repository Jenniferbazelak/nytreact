// Require mongoose
var mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
  // title is a required string
  title: {
    type: String,
    required: true,
    unique: true
  },
  // summary is a required string
  summary: {
    type: String,
    required: true,
    unique: true
  },
   // link is a required url
   link: {
    type: String,
    required: true,
    unique: true
    
  },
  // boolean to flag articles as saved
  saved: {
    type: Boolean,
    required: true,
    default: false
  },
  date: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  id: {
    type: String,
    unique: true
  }
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;
