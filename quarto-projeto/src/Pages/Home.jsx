import React from 'react'
import CardPromocao from '../Components/CardPromocao'

export default function Home() {
    let promo = {
        img: 'https://www.receitasnestle.com.br/sites/default/files/2021-05/capa-feira-de-janeiro-conheca-as-10-frutas-e-verduras-mais-queridas-do-mes.jpg',
        titulo: "Promoção do dia - compre duas e leve quatro"
    }

  return (
    <div>
         <CardPromocao img={promo.img} titulo={promo.titulo}/>
    </div>
  )
}
