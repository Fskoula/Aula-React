import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
=======
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Flores from './Pages/Flores'
>>>>>>> 2bdb9c3d3f1d3001541e77913dffc80732a70125

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <h1 className='front-bold'> 🎂 Fernanda's Cakes 🍰</h1>

      <div class="grid grid-cols-6 gap-4">
        <div class="col-span-4 col-start-2 p-8 justify-self-center bg-rose-300 hover:bg-rose-400 focus:outline-2 focus:outline-offset-2 focus:outline-rose-500 active:bg-rose-700 rounded-md">
          <p className='tracking-wide text-rose-800 dark:text-rose-600 underline decoration-wavy'>Bolo de morango</p>
          <img src="https://img.cybercook.com.br/receitas/832/bolo-de-morango-10.jpeg" width="100px" height="100px" alt="imagem bolo" className='rounded-md'/>
        </div>
        <div class="col-start-1 col-end-3 p-8 justify-self-center bg-rose-300 hover:bg-rose-400 focus:outline-2 focus:outline-offset-2 focus:outline-rose-500 active:bg-rose-700 rounded-md">
        <p className='tracking-wide text-rose-800 dark:text-rose-600 underline decoration-wavy'>Bolo de laranja</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1CSA-_X3dLm9_K4EkGjC9IAIPU7Mqb_QV1g&s" width="100px" height="100px" alt="imagem bolo" className='rounded-md'/>
        </div>
        <div class="col-span-2 col-end-7 p-8 justify-self-center bg-rose-300 hover:bg-rose-400 focus:outline-2 focus:outline-offset-2 focus:outline-rose-500 active:bg-rose-700 rounded-md">
        <p className='tracking-wide text-rose-800 dark:text-rose-600 underline decoration-wavy'>Bolo de chocolate</p>
          <img src="https://recipesblob.oetker.com.br/assets/e4907609f7e14c7ca1c9d68b5149499a/1272x764/bolo-de-chocolate-com-cobertura.webp" width="100px" height="100px" alt="imagem bolo" className='rounded-md'/>
        </div>
        <div class="col-start-1 col-end-7 p-8 justify-self-center bg-rose-300 hover:bg-rose-400 focus:outline-2 focus:outline-offset-2 focus:outline-rose-500 active:bg-rose-700 rounded-md">
        <p className='tracking-wide text-rose-800 dark:text-rose-600 underline decoration-wavy'>Bolo de cenoura</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ7aH710q8EZLW4CIHHxpozzXinlPHr9yv_w&s" width="100px" height="100px" alt="imagem bolo" className='rounded-md'/>
        </div>
=======
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
>>>>>>> 2bdb9c3d3f1d3001541e77913dffc80732a70125
      </div>
    </>
  )
}

export default App
