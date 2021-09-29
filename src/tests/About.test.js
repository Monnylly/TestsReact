import React from 'react';
import { render, screen } from '@testing-library/react';

import About from '../components/About';

const imagem = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';

describe('testando arquivo About', () => {
  test('se contém um heading "h2" com o texto "About Pokédex"', () => {
    render(<About />);
    const aboutText = screen.getByRole('heading', {
      level: 2,
      name: 'About Pokédex',
    });
    expect(aboutText).toBeInTheDocument();
  });

  test('se contem dois paragrafos com o texto sobre a Pokédex', () => {
    render(<About />);
    const paragrafo1 = screen.getByText(/This application simulates a Pokédex/i);
    const paragrafo2 = screen.getByText(/One can filter Pokémons by type/i);

    expect(paragrafo1).toBeInTheDocument();
    expect(paragrafo2).toBeInTheDocument();
  });

  test('Verifica se imagem de uma Pokédex aparece na tela', () => {
    render(<About />);
    const imagPokedex = screen.getByRole('img');

    expect(imagPokedex.src).toBe(imagem);
  });
});
