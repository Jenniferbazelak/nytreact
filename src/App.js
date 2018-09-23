import React, { Component } from 'react';
import Header from "./components/Header";
import Container from "./components/Container";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";


class App extends Component {
  state = {
    results: {},
    search: "",
    startDate: "",
    endDate: ""
  };
  searchArticles = (search, startDate, endDate) => {
    API.search(search, startDate, endDate)
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  //handleSaveArticle 

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.search, this.state.startDate, this.state.endDate);
    //send data to populate in the results
  };
  
  
  render() {
    return (
      <div>
           <Container>
        <Header/>
        <Search
        value={this.state.search}
        value={this.state.startDate}
        value={this.state.endDate}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}/>
        <Results
        title={this.state.results.Title}
        summary={this.state.results.summary}
       link={this.state.results.link}
        handleSaveArticle={this.state.handleSaveArticle}/>
        <Saved/>
        </Container>
      </div>
    );
  }
}

export default App;
