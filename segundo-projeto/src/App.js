import './App.css';
import { useState } from 'react';
import CardAnimal from './components/CardAnimal';

function App() {
  const [nome, setNome] = useState('Pedro');
  //hendler quer dizer que ela manipula/muda algo
  const mudarNomeHendler = () => {
    setNome('João');
  }

  const [animal, setAnimal] = useState('Girafa');
  const mudarAnimalHendler = () => {
    setAnimal('Pinguin');
  }

  return (
    <div className="App">
      <p>Nome: {nome}</p>
      <button onClick={mudarNomeHendler}>
        Mudar nome
      </button>

      <h1>Animal: {animal}</h1>
      <button onClick={mudarAnimalHendler}>
        Mudar animal
      </button>

      <CardAnimal/>
    </div>
  );
}

export default App;
