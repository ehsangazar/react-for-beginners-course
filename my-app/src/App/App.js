import React from 'react';
import './App.css';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import PRODUCTS from './PRODUCTS.json'

function App() {
  return (
    <div className="App">
      <Header />
      <ul className="products">
        {PRODUCTS.map((item) => (
          <li>
            <h3>{item.name}</h3>
            <img src={item.image} />
            <span>Price: {item.price}</span>
            <button>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;
