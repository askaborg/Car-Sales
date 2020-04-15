import React from 'react'
import { connect } from 'react-redux'

import { addFeature } from '../actions/carActions'
import AdditionalFeature from './AdditionalFeature'

const AdditionalFeatures = props => {
  const { additionalFeatures, addFeature } = props

  return (
    <div className="content card-content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(feature => (
            <AdditionalFeature key={feature.id} feature={feature} addFeature={addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {    
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, { addFeature })(AdditionalFeatures);
