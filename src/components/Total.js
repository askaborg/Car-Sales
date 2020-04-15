import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  const { additionalPrice } = props
  const { price } = props.car

  return (
    <div className="content card-content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  )
}

const mapStateToProps = state => {
  return {    
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {})(Total)
