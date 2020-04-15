import React from 'react'
import { connect } from 'react-redux'

import { removeFeature } from '../actions/carActions'
import AddedFeature from './AddedFeature'

const AddedFeatures = props => {
  const { removeFeature } = props
  const { features } = props.car

  return (
    <div className="content card-content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(feature => (
            <AddedFeature key={feature.id} feature={feature} removeFeature={removeFeature} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {    
    car: state.car
  }
}

export default connect(mapStateToProps, { removeFeature })(AddedFeatures)
