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
        <Search/>
        <Results/>
        <Saved/>
        </Container>
      </div>
    );
  }
}

export default App;
