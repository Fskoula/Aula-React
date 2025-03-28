import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Feira from './Pages/Feira'
import About from './Pages/About'


function App() {

  return (
    <>
      <div className="container">
        <header>

          <div className="logo">
            <p>🍒</p>
          </div>

          <nav className="menu">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/Feira">Feira</a>
              </li>
            </ul>
          </nav>
        </header>
        <Router>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/Feira" Component={Feira} />
              <Route path="/About" Component={About} />
            </Routes>
          </Router>
      </div>
    </>
  )
}

export default App
