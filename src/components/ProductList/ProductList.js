import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';
import './ProductList.css';

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList row">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    );
  }
}

export default ProductList;
