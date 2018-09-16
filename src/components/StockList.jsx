import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/StockList'
import SubList from './SubList.js'


@connect(state => ({
  stocks: state.stocks
}), Object.assign({}, actionCreators))
export class StockList extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  componentWillMount() {
    this.props.getInitStocks()
  }

  render() {
    const {stocks} = this.props
    return (
      <div className="stock-list-container">
          <SubList title="Gainers" list={stocks.gainers} />
          <SubList title="Losers" list={stocks.losers} />
      </div>
  )};

}
