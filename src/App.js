import React, { Component } from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/header/Header';
import MainBody from './components/main-body/MainBody';
import SearchBar from './components/search-bar/SearchBar';

class App extends Component {
  render() {
    return (
      <Container>
        <Header/>
        <SearchBar/>
        <MainBody/>
      </Container>
    );
  }
}

export default App;
