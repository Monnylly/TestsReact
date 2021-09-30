import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../components/NotFound';
import renderWithRouter from '../utils/renderWithRouter';

const imagPage = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';

describe('testando componente NotFound', () => {
  test('verifica se a pagina tem um h2 com um texto Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const tagH2text = screen.getByRole('heading', {
      level: 2,
      name: /Page requested not found/i,
    });
    expect(tagH2text).toBeInTheDocument();
  });
  test('verifica se a imagem aparece na tela', () => {
    renderWithRouter(<NotFound />);
    const imagText = screen.getByAltText(/Pikachu/);

    expect(imagText).toHaveAttribute('src', imagPage);
  });
});
