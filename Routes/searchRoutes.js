require('dotenv').config();
const express = require("express");
const router = express.Router();
const request = require("request");


router.get("/", function(req,res) {
  const { search, startDate, endDate } = req.query;
  const apiKey = process.env.NYT_API_KEY;

  let queryUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${apiKey}&q=${search}`;
  if (startDate) queryUrl += `&begin_date=${startDate}`;
  if (endDate) queryUrl += `&end_date=${endDate}`;

  request(queryUrl, function(err,response,body) {
    if (err) {
      console.log(err + response);
      return res.json(err);
    };
    const rawJson = JSON.parse(body);
    const articleData = rawJson.response.docs.map(article => {
      return {
        id: article._id,
        title: article.headline.main,
        summary: article.snippet,
        link: article.web_url,
        date: article.pub_date || "Not provided",
        saved: false
      };
    });
    res.json(articleData);
  });


});

module.exports = router;