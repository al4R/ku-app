import React, {Component} from 'react';
import png from './koin.png';
import './App.css';

class Product extends React.Component{
   state = {
      judul: "Kaset",
      harga: "130.000"
   }

   render(){
      return (
        <div>
            <img src={png} className="App-logo" alt="logo" />
            <h1>{this.props.judul}</h1>
            <h3 className="harga">Harga: { this.props.harga }</h3>
        </div>
      );
   }
}

export default Product;