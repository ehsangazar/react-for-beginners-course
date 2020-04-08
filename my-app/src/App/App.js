import React from 'react';
import './App.css';
import Products from '../Products/Products';
import About from '../About/About';
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
        <Switch>
          <Route exact path="/">
            <Layout>
              <Products data={PRODUCTS} />
            </Layout>
          </Route>
          <Route path="/about">
            <Layout><About /></Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
