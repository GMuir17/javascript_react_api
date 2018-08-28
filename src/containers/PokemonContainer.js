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
    this.handlePokemonSelected = this.handlePokemonSelected.bind(this);
  }

  componentDidMount() {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((pokemon) => {
        this.setState({ pokemon: pokemon.results });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  handlePokemonSelected(index){
    const selectedPokemon = this.state.pokemon[index];
    this.setState({ selectedPokemon: selectedPokemon })
  }

  render() {
    return (
      <div>
        <h2>Pokemon Container</h2>
        <PokemonSelector
          pokemon={this.state.pokemon}
          onPokemonSelected={this.handlePokemonSelected}
        />
        <PokemonDetail selectedPokemon={this.state.selectedPokemon} />
      </div>
    )
  }

}

export default PokemonContainer;
