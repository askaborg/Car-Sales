import React from 'react'
import { connect } from 'react-redux'

const Header = props => {
  const { image, name, price } = props.car
  
  return (
    <>
      <div className='card-image'>
        <figure className="image is-256x256">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className='card-content'>
        <h2 className='title'>{name}</h2>
        <p className='subtitle'>Amount: ${price}</p>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {    
    car: state.car
  }
}

export default connect(mapStateToProps)(Header)