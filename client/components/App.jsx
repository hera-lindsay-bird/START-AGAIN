import React from 'react'

import { Route, Routes, useNavigate } from 'react-router-dom'
import Mindfulness from './Mindfulness'
import Journal from './Journal'
import CreateEntry from './CreateEntry'
import Weather from './Weather'
import Home from './Home'

function App() {
  const navigate = useNavigate()
  const navigateToHomepage = () => {
    navigate('/')
  }

  return (
    <>
      <Weather />
      <strong className="absolute top-6 left-4" onClick={navigateToHomepage}>
        start again
      </strong>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mindfulness" element={<Mindfulness />} />
        <Route path="/create-entry" element={<CreateEntry />} />
        <Route path="/journaling" element={<Journal />} />
      </Routes>
    </>
  )
}

export default App
