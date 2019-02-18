import React, {Component} from 'react';
import png from './indo.jpg';
import './App.css';

class Promo extends React.Component{
  
 
    render(){
       return (
         <div>
             <img src={png} alt="logo" />
        
         </div>
       );
    }
 }
 
 export default Promo;