import React from 'react';
import './App.css';
import Products from '../Products/Products';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Blog from '../Blog/Blog';
import Layout from "../Layout/Layout";
import PRODUCTS from "./PRODUCTS.json";
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Products data={PRODUCTS} />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
