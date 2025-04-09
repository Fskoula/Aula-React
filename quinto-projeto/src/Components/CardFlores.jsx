import React from 'react'
import "./CardFlores.css"

export default function CardFlores({img, nome, preco}) {
  return (
    <div className='card1'>
        <div className="img1">
            <img src={img} alt="" />
        </div>
        <div className="infos1">
            <p className='nome'>Buquet: {nome}</p>
            <p className='preco'>Valor: {preco}</p>
        </div>
      
    </div>
  )
}
