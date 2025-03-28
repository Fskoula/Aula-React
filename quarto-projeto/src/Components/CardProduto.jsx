import React from 'react'
import './CardProduto.css'

export default function CardProduto({img, nome, preco}) {
  return (
    <div className="card">
        <div className="img">
            <img src={img} alt="" />
        </div>
        <div className="infos">
            <p className="nome">Nome: {nome}</p>
            <p className="preco">Preço: {preco}</p>
        </div>
    </div>
  )
}
