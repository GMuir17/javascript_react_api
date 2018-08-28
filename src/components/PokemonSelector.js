import React from 'react';

const PokemonSelector = (props) => {
  function handleChange(evt) {
    props.onPokemonSelected(evt.target.value);
  }

  const options = props.pokemon.map((pokemon, index) => {
    return <option value={index} key={index}>{pokemon.name}</option>
  });

  return (
    <select
      id="pokemon-selector"
      defaultValue="default"
      onChange={handleChange}
    >
        <option disabled value="default">Choose a Pokemon...</option>
        {options}
    </select>
  )
}

export default PokemonSelector;
