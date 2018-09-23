import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
const APIKEY = "0f1e5f1eb5e3402dadd720d3519de6bf";

export default {
  search: function(query, startYear, endYear) {
    return axios.get(BASEURL + query + APIKEY + query + startYear + endYear);
  }
};
