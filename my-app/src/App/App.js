import React from 'react';
import './App.css';
import Header from './../Header/Header'
import Footer from './../Footer/Footer'
import Products from '../Products/Products';
import PRODUCTS from "./PRODUCTS.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Products 
        data={PRODUCTS} 
      />
      <Footer />
    </div>
  );
}

export default App;
