import React, { Component } from 'react';
import Header from "./components/Header";
import Container from "./components/Container";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";
import API from "./utils/API";
// import { BrowserRouter as Router, Route } from "react-router-dom";


class App extends Component {
  state = {
    results: [],
    search: "",
    startDate: "",
    endDate: "",
    savedArticles: []
  };


  searchArticles = (search, startDate, endDate) => {
    API.search(search, startDate, endDate)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  loadSavedArticles = () => {
    API.getSaved()
      .then(res =>
        this.setState({ savedArticles: res.data })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSaveArticle = id => {
    const articleToSave = this.state.results.find(result => result.id === id)
    const articleInfo = {
      title: articleToSave.title,
      summary: articleToSave.summary,
      link: articleToSave.link,
      date: articleToSave.date,
      id: articleToSave._id,
      saved: true
    }
    API.saveArticle(articleInfo);
    this.loadSavedArticles();
  }

  handleDeleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search, this.state.startDate, this.state.endDate);

  };


  render() {
    return (
      <div>
        <Container>
          <Header />
          <Search
            search={this.state.search}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />
          <Results
              results={this.state.results} />
          
          <Saved>
            <div>
              {this.state.savedArticles.map(article => {
                return (
                  <div className="card-body">
                    <a className="url" href={article.link}><span className="title">{article.title}</span> </a>
                    <p className="summary">{article.summary}</p><button type="button" onClick={article.handleDeleteArticle} data-id={article.id} className="btn btn-info" id="deleteButton">Delete</button>
                  </div>)
              })}
            </div>
          </Saved>
        </Container>
      </div>
    );
  }
}

export default App;
