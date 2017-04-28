import React, { Component } from 'react';
import Nav from './components/Nav.js'
import SnippetsContainer from './containers/SnippetsContainer.js';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        < SnippetsContainer />
      </div>
    );
  }
}

export default App;
