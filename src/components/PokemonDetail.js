import React from 'react';

const PokemonDetail = (props) => {
  if (!props.selectedPokemon) return null;
  return (
    <div>
      <h3>
        {props.selectedPokemon.name}
      </h3>
    </div>
  )
}

export default PokemonDetail;
