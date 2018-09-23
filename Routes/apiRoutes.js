const express = require("express");
const router = express.Router();
require('dotenv').config();
const axios = require("axios");
const request = require("request");

// Import models
const db = require("../models");

//need a route for nyt to get articles "search"
//need a route for save articles get and /api/saved "getSaved"
//need a route to save an article post and /api/saved "saveArticle"
//need a route to delete articles delete /api/saved/id "remove"





module.exports = router;