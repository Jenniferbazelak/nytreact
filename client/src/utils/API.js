import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "0f1e5f1eb5e3402dadd720d3519de6bf";

export default {
  search: function(search, startDate, endDate) {
    return axios.get(BASEURL + search + APIKEY + search + startDate + endDate);
  },
  saveArticle: function(articleInfo) {
    return axios.post("api/saved", articleInfo);
  },
  getSaved: function() {
    return axios.get("api/saved");
  },
  remove: function(id) {
    return axios.delete("api/saved/" + id);
  },
  
};

