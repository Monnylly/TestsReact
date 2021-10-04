import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemons from '../data';
import renderWithRouter from '../utils/renderWithRouter';
// import { render } from 'react-dom';
// import { Pokemon } from '../components';

describe('Testando o componente Pokemon', () => {
  it('O nome correto do Pokémon deve ser mostrado na tela', async () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name').innerHTML;
    expect(pokemonName).toBe('Pikachu');
  });
  it('O tipo correto do pokémon deve ser mostrado na tela.', () => {
    renderWithRouter(<App />);

    const pokemonType = screen.getByTestId('pokemon-type').innerHTML;
    expect(pokemonType).toBe('Electric');
  });
  it('O peso médio do pokémon deve ser exibido com um texto no formato', () => {
    renderWithRouter(<App />);
    const { averageWeight: { value, measurementUnit } } = pokemons[0];
    const pokemonWeight = screen.getByTestId('pokemon-weight');

    expect(pokemonWeight)
      .toHaveTextContent(`Average weight: ${value} ${measurementUnit}`);
  });
});
