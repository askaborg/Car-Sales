import React from 'react'

import Header from './components/Header'
import AddedFeatures from './components/AddedFeatures'
import AdditionalFeatures from './components/AdditionalFeatures'
import Total from './components/Total'

const App = () => {
  return (
    <div className="columns">
      <div className="column">
        <div className='card'>
          <Header />
          <AddedFeatures />
        </div>
      </div>
      <div className="column">
        <div className='card'>
          <AdditionalFeatures />
          <Total />
        </div>
      </div>
    </div>
  )
}

export default App;
