import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import MorInfo from './pages/morinfo/MorInfo'
function App() {


  return (
    <div>

      <Router basename='/crypto-cheaker'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coinpage/:id' element={< MorInfo />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
