import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Flores from './Pages/Flores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <header>
          <div className="logo">
            <p>🌷 <h1>Lila's Floricultura</h1> </p>
          </div>
          <nav>
            <ul className="menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/Flores">Flores</a>
              </li>
            </ul>
          </nav>
        </header>
        <Router>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/Flores" Component={Flores} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
