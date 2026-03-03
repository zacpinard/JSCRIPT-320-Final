import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useParams, Link, useLocation } from 'react-router-dom'
import PolluterProfile from './polluterProfile'
import CreateMap from './map'


function App() {
  

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Polluter />}></Route>
      </Routes> */}
      <div className='bubble-chart'>
        <h1>Washington's Climate Commitment Visualized</h1>
      </div>
      <div className='polluter-map'>
        <CreateMap />

      </div>
      <div>
        {/* <PolluterProfile /> */}
      </div>
    </div>
  )
}

export default App
