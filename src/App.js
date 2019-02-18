import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Promo from './Promo';

const code = "<code>ngoding</code>";
class App extends Component {
  render() {
    return (

      <div className="App">
      <div className="promo"><Promo ></Promo></div>
        <header className="App-header">
        <div className="ap">
        <Product judul="Koinku " harga="10.000"></Product>
        </div>
        <div className="ap">
        <Product judul="Koinku " harga="10.000"></Product>
        </div>
        <div className="ap">
        <Product judul="Koinku " harga="10.000"></Product>
        </div>
        <div className="ap">
        <Product judul="Koinku " harga="10.000"></Product>
        </div>
        </header>
      
      </div>
    );
  }
}

export default App;