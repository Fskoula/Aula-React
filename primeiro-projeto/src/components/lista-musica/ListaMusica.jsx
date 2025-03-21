import axios  from 'axios'
import React, { useEffect, useState } from 'react'
import Musica from '../musica/musica'

export default function ListaMusica({novaMusica}) {

    const [musicas, setMusicas] = useState([])


    useEffect(()=>{
        axios.get('http://localhost:3000/musica/').then(response => {
            setMusicas(response.data)
        })
       
    },[novaMusica])
    
    
    return (
        <>
            {
                musicas.length > 0 ?
                    musicas.map((musica, index) => <Musica key={index} dados={musica} />)
                    :
                    <p>Nenhuma música!</p>
            }

          
        </>
    )
}