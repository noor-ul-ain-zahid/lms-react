import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/common/Header'
import Main from './components/Main'
class App extends Component {
  render() {
    return (
      <div className="main content">
        <BrowserRouter>
          <div>
            <Header />
            <Main />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
