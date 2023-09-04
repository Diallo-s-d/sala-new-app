 import PropTypes from 'prop-types'
 

function PokemonCard({name, imgSrc}) {
  //const {pokemon} = props;

return (
  /*<div>
  <figure>
      {pokemon.imgSrc === undefined ? "???" : <img src={pokemon.imgSrc}alt={pokemon.name} />}
  </figure>
  <h1>{pokemon.name}</h1>

</div>
;) */
<>
            <div>
                <h1>{name}</h1>
                <img src={imgSrc} alt={name} />
            </div>
        </>
    )
}

  
PokemonCard.propTypes = {
    pokemonList: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,

}

export default PokemonCard;
  

  