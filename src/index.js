import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
//   );
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }
  
//   setInterval(tick, 1000);
// function Product(props){
//       return (<div><h1>{props.judul}</h1><h3>harga : {props.harga}</h3></div>);
//   }
  
//   const element = <Product judul="Buku Biru Buku Biru"
//   harga = "100000"> </Product>;
//   ReactDOM.render(element, document.getElementById('root'));
// function Welcome(props) {
//   return <h1>Holla, {props.name}</h1>;
// }

// const element = <Welcome name="Cutek" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

  ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
