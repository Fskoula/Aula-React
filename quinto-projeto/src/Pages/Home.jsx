import React from "react"
import CardHome from "../Components/CardHome"

export default function Home() {
    let home = {
        titulo: "Bem - Vindos",
        img: 'https://conectasc.com.br/wp-content/uploads/2025/04/a1d13c55-f458-4b26-b11d-d015a2640a75.jpg'
    }
    return (
        <div>
            <CardHome img={home.img} titulo={home.titulo} />
        </div>
    )
}