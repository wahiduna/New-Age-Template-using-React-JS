import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const name = 'Josh Perez';
    const element = React.createElement(
      'h1',
      {className: 'greeting'},
      'Hello, world!'
    );

    const content = (
      <div className="App">
      <header className="App-header">
      element
      </header>
      </div>
    );


    function Hello(props) {
      // Correct! This use of <div> is legitimate because div is a valid HTML tag:
      return <h1>Hello {props.toWhat}</h1>;
    }

    function HelloWorld() {
      // Wrong! React thinks <hello /> is an HTML tag because it's not capitalized:
      return <Hello toWhat="World" />;
    }

    return (
      HelloWorld()
    );
  }
}

export default App;
