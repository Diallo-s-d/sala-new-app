import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleSuivantClick =() => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };
  
  const handlePrecedentClick=() => {
    if (pokemonIndex > 0) { 
      setPokemonIndex(pokemonIndex - 1);
    }
  }


  return (

    <div>
       {/* <p>{pokemonIndex}</p> */}
      <button onClick={handlePrecedentClick}>Precedent</button>
      <button onClick={handleSuivantClick}>Suivant</button>
      <PokemonCard {...pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App
