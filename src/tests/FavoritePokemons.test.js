import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../utils/renderWithRouter';
import { FavoritePokemons } from '../components';
import pokemons from '../data';

describe('Favorites test', () => {
  test('verifica se existe o texto "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);

    const notText = screen.getByText(/No favorite pokemon found/i);
    expect(notText).toBeInTheDocument();
  });

  test('Verifica se é exibido todos os cards de pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons pokemons={ [pokemons[0]] } />);
    const cardPokemon = screen.getByTestId('pokemon-name');
    expect(cardPokemon).toBeInTheDocument();
  });
});
