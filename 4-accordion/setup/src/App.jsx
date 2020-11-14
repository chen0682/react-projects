import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App () {
  // const { data } = data

  return (
    <div className='container'>
      <h3>Questions and answers about login</h3>
      <div className='section'>
        {data.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}

      </div>
    </div>
  )
}

export default App
