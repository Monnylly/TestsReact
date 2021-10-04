import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import pokemons from '../data';
import renderWithRouter from '../utils/renderWithRouter';
import { Pokemon } from '../components';
// import { render } from 'react-dom';
// import { Pokemon } from '../components';

describe('Testando o componente Pokemon', () => {
  it('O nome e o tipo correto do Pokémon deve ser mostrado na tela', async () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name').innerHTML;
    expect(pokemonName).toBe('Pikachu');
    const pokemonType = screen.getByTestId('pokemon-type').innerHTML;
    expect(pokemonType).toBe('Electric');
  });
  it(`'O peso médio do pokémon deve ser 
  exibido com um texto no formato e se img aparece com texto e atributos'`, () => {
    renderWithRouter(<App />);
    const { name, averageWeight: { value, measurementUnit }, image } = pokemons[0];
    const pokemonWeight = screen.getByTestId('pokemon-weight');
    const imagemPokemon = screen.getByRole('img', {
      name: /sprite/i,
    });

    expect(pokemonWeight)
      .toHaveTextContent(`Average weight: ${value} ${measurementUnit}`);
    expect(imagemPokemon).toHaveAttribute('src', image);
    expect(imagemPokemon).toHaveAttribute('alt', `${name} sprite`);
  });
  it(`'Teste se o card do Pokémon indicado na Pokédex
   contém um link de navegação para exibir detalhes deste Pokémon'`, () => {

    renderWithRouter(<App />);
    const link = screen.getByRole('link', {
      name: 'More details',
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', `/pokemons/${pokemons[0].id}`);
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    renderWithRouter(<Pokemon pokemon={ pokemons[0] } isFavorite />);
    const starFavorite = screen.getByRole('img',
      { name: 'Pikachu is marked as favorite' });
    expect(starFavorite).toHaveAttribute('src', '/star-icon.svg');
    expect(starFavorite)
      .toHaveAttribute('alt', `${pokemons[0].name} is marked as favorite`);
  });
});
