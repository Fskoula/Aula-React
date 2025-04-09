import React from 'react'
import CardFlores from '../Components/CardFlores'

export default function Flores() {
    let flores = {
        img: 'https://cdn.awsli.com.br/600x450/1732/1732198/produto/234414767/buque-de-g-rberas-6sems1heds.png',
        nome: "Flores do campo",
        preco: "50,00"
    }

    let flores1 = {
        img: 'https://www.isabelaflores.com/media/catalog/product/b/a/baixa-185-2.webp',
        nome: "Rosas",
        preco: "100,00"
    }

    return (
        <div>
            <CardFlores img={flores.img} nome={flores.nome} preco={flores.preco} />
            <CardFlores img={flores1.img} nome={flores1.nome} preco={flores1.preco} />
        </div>
    )
}
