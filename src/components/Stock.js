import React from 'react';
import { connect } from 'react-redux';

const Stock = ({stock}) => {

  return (
    <div className="stock-container">
      <div className="stock-title">{stock.companyName}</div>
      <div className="stock-symbol">{stock.symbol}</div>
      <div className="stock-quote">{stock.latestPrice}</div>
    </div>
  )
}

export default Stock
