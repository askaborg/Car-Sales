import React from 'react'

const AddedFeature = props => {
  const { feature,removeFeature } = props
  const { name } = props.feature

  return (
    <li>
      <button className="button" onClick={() => removeFeature(feature)}>
        X
      </button>
      {name}
    </li>
  )
}

export default AddedFeature
