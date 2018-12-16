import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Body from './components/Body';
import LeftColumn from './components/LeftColumn';
import Footer from './components/Footer';
import Social from './components/Social';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <div className="App">
        <Header/>
        <div className='row'>
          <LeftColumn/>
          <Body/>
        </div>
        <Social/>
        <Footer/>
      </div>
      </div>
    );
  }
}

export default App;
