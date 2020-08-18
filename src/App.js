import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './containers/product/product';
import WishList from './containers/wishlist/wishlist';
import AddProduct from './containers/product/addproduct';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Project Product Shop</h2>
        </div>
        <div className="container-fluid App-main">
            <div className="row">
              <div className="col-sm-8">
                
                <Product />
                
              </div>
              <div className="col-sm-4">
                <WishList />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <AddProduct />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
