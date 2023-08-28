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
    
  return (
      <div>
         <figure> {props.pokemon.imgSrc === undefined ? "???" : <img src= {props.pokemon.imgSrc} alt={props.pokemon.name}/>}
        <figcaption>{props.pokemon.name}</figcaption>
        </figure>
      </div>
    );
  }
  
  export default PokemonCard;

  

  