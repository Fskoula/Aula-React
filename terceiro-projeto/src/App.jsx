import { useState } from 'react'
import './App.css'
import CardAnimal from './components/Animal/CardAnimal'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Pages/Home'
import Animais from './components/Pages/Animais'
import Sobre from './components/Pages/Sobre'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/sobre">Sobre</a></li>
          <li><a href="/animais">Animais</a></li>
        </ul>

        <Router>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/sobre' Component={Sobre}/>
            <Route path='/animais' Component={Animais}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
