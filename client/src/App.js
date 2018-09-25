import React, { Component } from 'react';
import Header from "./components/Header";
import Container from "./components/Container";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";
import API from "./utils/API";



class App extends Component {
  state = {
    results: [],
    search: "",
    startDate: "",
    endDate: ""
  };


  searchArticles = (search, startDate, endDate) => {
    API.search(search, startDate, endDate)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  loadSavedArticles = () => {
    API.getSaved()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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
   const articleInfo ={
    title: articleToSave.title,
    summary: articleToSave.summary,
    link: articleToSave.link,
    date: articleToSave.date,
    id: articleToSave._id,
    saved: true
    }
    API.saveArticle(articleInfo)
  }

  handleDeleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSavedArticles())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search, this.state.startDate, this.state.endDate).then(response => { this.setState({ results : response.data})}). catch(err => console.log(err))
  };


  render() {
    return (
      <div>
        <Container>
          <Header />
          <Search
            value={this.state.search}
            value={this.state.startDate}
            value={this.state.endDate}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />
          <Results>
            {this.state.results.map(result => {
              return (
                  key={result._id}
                  title={result.title}
                  summary={result.summary}
                  link={result.link}
                  handleSaveArticle={this.state.handleSaveArticle}
           
              );
            })} </Results>
          <Saved />
        </Container>
      </div>
    );
  }
}

export default App;
