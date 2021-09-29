import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../components/RenderWith';

import App from '../App';
// import userEvent from '@testing-library/user-event';

describe('testando componente App', () => {
  test('testando a Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', {
      name: 'Home',
    });

    expect(home).toBeInTheDocument();

    const url = 
    userEvent.onclick(home).toBe('/');
  });

  // const home = screen.getByRole('link', {
  //   nome: 'Home',
  // });
});

// test('primeiro link deve possuir o texto "Home"', () => {
//   const oneLink = screen.getByRole('/Home');
//   const linkHomeText = screen.getByText()
//   expect(getByRole())

// });
