import React from 'react';

const PokemonDetail = (props) => {
  if (!props.selectedPokemon) return null;
  console.log(props.selectedPokemon.name);
  return (
    <div>
      <h3>
        Species: {props.selectedPokemon.name}
      </h3>
      <h4>
        Weight: {props.selectedPokemon.weight}
      </h4>
      <img src={props.selectedPokemon.sprites.front_default} alt="A pokemon sprite" />
    </div>
  )
}

export default PokemonDetail;
