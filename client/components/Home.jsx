import React from 'react'
import Quote from './Quote'
import Question from './Question'
import Image from './Image'

function App() {
  return (
    <>
      <Image />
      <div className="flex h-screen">
        <div className="m-auto bg-opacity-60 bg-white p-8 rounded-2xl z-10">
          <Quote />
          <Question />
        </div>
      </div>
    </>
  )
}

export default App
