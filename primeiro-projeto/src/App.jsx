import { use, useState } from 'react'
import './App.css'

import axios from 'axios'
import ListaMusica from './components/lista-musica/ListaMusica'


function App() {

  // const [musica1, setMusica1] = useState({
  //   id: "",
  //   titulo: "",
  //   artista: "",
  //   visualizacoes: 0
  // })

  const [id,setId] = useState()
  const [titulo,setTitulo] = useState()
  const [artista,setArtista] = useState()
  const [visualizacoes,setvisualizacoes] = useState()
  const [teste,setTeste] = useState("")
  
  const addMusicaHandler = () =>{
    let musica = {
      id: id,
      titulo: titulo,
      artista: artista,
      visualizacoes: visualizacoes
    }
    axios.post('http://localhost:3000/musica',musica)
    .then(response => alert(response.status))
    setTeste("ss")
  }
 

  return (
    <>
    
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <input type="text" value={artista} onChange={(e) => setArtista(e.target.value)}/>
      <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
      <input type="text" value={visualizacoes} onChange={(e) => setvisualizacoes(e.target.value)}/>
      <ListaMusica novaMusica={teste}/>  
      <button onClick={addMusicaHandler}>Add musica</button>
    </>
  )
}

export default App