import React from 'react'
import CardProduto from '../Components/CardProduto'

export default function Feira() {
    let produto = {
        name:'Maçã Fugi',
        image:'https://th.bing.com/th/id/OIP.FReG9H5VYbwnQq5nk2LeBAHaFP?rs=1&pid=ImgDetMain',
        price:3.90
      }
      let produto2 = {
        name:'Laranjas',
        image:'https://files.agro20.com.br/uploads/2019/11/benef%C3%ADcios-da-laranja-3.jpg',
        price: 4.99
      }
      return (
        <div>
            
            <CardProduto img={produto.image} nome={produto.name} preco={produto.price} />
            <CardProduto img={produto2.image} nome={produto2.name} preco={produto2.price} />
    
        </div>
      )
    }
