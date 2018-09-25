const express = require("express");
const router = express.Router();
const db = require("../models");

//get saved articles
router.get("/saved", function(req,res) {
    db.Article.find({saved: true})
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  });

  // Save an article
router.post("/saved", function(req,res) {
  const newArticle = {
    title: req.body.title,
    summary: req.body.summary,
    link: req.body.link,
    date: req.body.date,
    id: req.body._id,
    saved: true
  };
  db.Article.create(newArticle)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

//delete article
router.delete("/saved/:id", function(req,res) {
  console.log("Deleting id " + req.params.id);
    db.Article.remove({_id: req.params.id})
      .then((data) => res.json(data))
      .catch((err) => res.json(err));
  });





module.exports = router;


