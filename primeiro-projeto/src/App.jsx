import { useState } from 'react'
import './App.css'
import Animal from './components/animal/Animal'
import Produto from './components/produto/Produto'

function App() {

  let animal = {
    nome: "Carlinhos",
    especie: "Réptil",
    cor: "Rosa",
    img: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg"
  }

  let peixe = {
    nome: "Robertinho",
    especie: "Ave",
    cor: "Azul",
    img: "https://equipamentoparapesca.com.br/wp-content/uploads/2024/11/peixe-bolha-no-fundo-do-mar.webp"
  }

  let sofa = {
    produto: "Sofá três lugares",
    codigo: "13465",
    img: "https://static.mobly.com.br/p/Modern-SofC3A1-3-Lugares-Nevada-I-Suede-Bege-5637-661847-2.jpg"
  }

  let cama = {
    produto: "Cama de casal",
    codigo: "9067",
    img: "https://io.convertiez.com.br/m/lojasedmil/shop/products/images/1395/medium/cama-de-casal-madeira-amendoa-reali-lopas_9772.jpg"
  }

  return (
    <>
      <Animal dados={animal}/>
      <Animal dados={peixe}/>

      <Produto dados={sofa}/>
      <Produto dados={cama}/>
    </>
  )
}

export default App
