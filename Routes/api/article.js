const express = require("express");
const router = express.Router();
require('dotenv').config();
const booksController = require("../../controllers/articleController");
const request = require("request");
const db = require("../models");

//need a route for nyt to get articles "search"
//need a route for save articles get and /api/saved "getSaved"
//need a route to save an article post and /api/saved "saveArticle"
//need a route to delete articles delete /api/saved/id "remove"

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;

