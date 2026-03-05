import { useState } from 'react'
import './App.css'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'
import PolluterPage from './PolluterPage'
import { Home } from './Home'


function App() {
  
  return (
    <div>
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/polluters/:id" element={<PolluterPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
