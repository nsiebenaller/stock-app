import React from 'react';
import { connect } from 'react-redux';
import Stock from './Stock.js'

const SubList = ({title, list}) => {
  return (
    <div className={"sub-list-container list-type-"+title }>
      <div className="sub-list-title">{title}</div>
      <div className="sub-list-data">
        {list.map((stock, idx) =>
          <Stock key={title+'-'+idx} stock={stock} />
        )}
      </div>
    </div>
  )
}

export default SubList
