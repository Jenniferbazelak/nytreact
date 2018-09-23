import React, { Component } from 'react';
import Header from "./components/Header";
import Container from "./components/Container";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Search from "./components/Search";


class App extends Component {
  state = {
    
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
