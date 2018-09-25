import axios from "axios";


export default {
  search: function(search, startDate, endDate) {
    const q = search.replace(/ /g, "+");
    let url = `/search?searchTerm=${q}`;
    if (startDate) url += `&startDate=${startDate}`;
    if (endDate) url += `&endDate=${endDate}`;
    console.log(url);
    return axios.get(url);
  },
  saveArticle: function(articleInfo) {
    return axios.post("/api/saved", articleInfo);
  },
  getSaved: function() {
    return axios.get("/api/saved");
  },
  remove: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  
};

