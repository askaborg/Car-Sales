import React from 'react'

const AdditionalFeature = props => {
  const { addFeature, feature } = props
  const { name, price } = props.feature

  return (
    <li>
      <button className="button" onClick={() => addFeature(feature)}>Add</button>
      {name} (+{price})
    </li>
  )
}

export default AdditionalFeature