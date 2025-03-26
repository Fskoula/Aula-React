import React from 'react'
import CardAnimal from '../Animal/CardAnimal'

const animais = [
    {
      id: "1",
      specie: "Baleia Jujuba",
      taxonomy: "Megaptera novaeangliae",
      img: "https://www.iguiecologia.com/wp-content/uploads/2021/05/Baleia-jubarte-1170x697.jpg"
    },
  
    {
      id: "2",
      specie: "Felino Nino",
      taxonomy: "Felis catus",
      img: "https://media.istockphoto.com/id/1443562748/pt/foto/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=OqlMF3bysUX6cVux5kKc1gqCGMghQpGc5ukyw1qG82s="
    }
  ]
  
function Animais() {
    return (
        <>
            <div className="animais">
                <CardAnimal
                    specie={animais[0].specie}
                    taxonomy={animais[0].taxonomy}
                    img={animais[0].img} />
                <br />
                <CardAnimal
                    specie={animais[1].specie}
                    taxonomy={animais[1].taxonomy}
                    img={animais[1].img} />
            </div>
        </>
    )
}

export default Animais
