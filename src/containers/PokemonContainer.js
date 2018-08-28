import React from 'react';
import PokemonSelector from '../components/PokemonSelector.js';
import PokemonDetail from '../components/PokemonDetail.js';

class PokemonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: [],
      selectedPokemon: null
    };
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((pokemon) => {
        this.setState({ pokemon: pokemon });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Pokemon Container</h2>
        <PokemonSelector />
        <PokemonDetail />
      </div>
    )
  }

}

export default PokemonContainer;
