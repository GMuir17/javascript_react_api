import React from 'react';

const PokemonDetail = (props) => {
  if (!props.selectedPokemon) return null;
  console.log(props.selectedPokemon.name);
  return (
    <div>
      <h3>
        {props.selectedPokemon.name}
      </h3>
      <h4>
        {props.selectedPokemon.weight}
      </h4>
    </div>
  )
}

export default PokemonDetail;
