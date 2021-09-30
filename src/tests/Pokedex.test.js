import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('testando componente Pokedex', () => {
  const pokemonId = 'pokemon-name';

  it('teste se a pagina contém uma heading h2 com texto "Encountered pokémons"', () => {
    renderWithRouter(<App />);

    const headingText = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(headingText).toBeInTheDocument();
  });

  it('teste se é exibido o proximo Pokemon da lista se o botao Próximo é clicado', () => {
    renderWithRouter(<App />);
    const btn = screen.getByTestId('next-pokemon');
    const pokemon = screen.getByTestId(pokemonId);
    expect(btn.innerHTML).toBe('Próximo pokémon');
    userEvent.click(btn);

    expect(pokemon.innerHTML).toBe('Charmander');
  });
  it('teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getAllByTestId(pokemonId);

    expect(pokemon).toHaveLength(1);
  });
  it('teste se a Pokedex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttonsFilter = screen.getAllByTestId('pokemon-type-button');
    buttonsFilter.forEach((button, index) => {
      expect(button).not.toEqual(buttonsFilter[index + 1]);
    });
  });
  it('testa se a Pokedex contém um botão de resetar o filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: 'All' });
    const pokemonName = screen.getByTestId(pokemonId);

    userEvent.click(buttonAll);
    expect(pokemonName.innerHTML).toBe('Pikachu');
  });
});

// Teste se página contém um heading `h2` com o texto `Encountered pokémons`.
// Teste se é exibido o próximo Pokémon da lista quando o botão `Próximo pokémon` é clicado.

// - O botão deve conter o texto `Próximo pokémon`;

// - Os próximos Pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

// - O primeiro Pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último Pokémon da lista;
