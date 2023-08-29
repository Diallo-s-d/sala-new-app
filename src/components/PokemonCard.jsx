 /*const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
*/

function PokemonCard ({name, imgSrc}) {
    const pokemon = pokemonList[0];
    console.log(pokemon.imgSrc)

return (
    
    <div>
        <figure>   
        {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc} alt={pokemon.name}/>}
        </figure>
        <h1>{pokemon.name}</h1>
        <figcaption>Bulbasaur</figcaption>
 
    </div>

)
}


export default PokemonCard;
  

  