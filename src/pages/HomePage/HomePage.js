import React, { Component } from 'react';
import Filter from './../../components/Filter/Filter';
import ProductList from './../../components/ProductList/ProductList';

class HomePage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <ProductList />
        </div>
        <div className="col-md-4">
          <Filter />
        </div>
        </div>
    );
  }
}

export default HomePage;
