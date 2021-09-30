import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import renderWithRouter from '../components/RenderWith';
import renderWithRouter from '../utils/renderWithRouter';

import App from '../App';

describe('testando componente App', () => {
  test('testando se existe um link com o texto "Home"', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', {
      name: 'Home',
    });

    expect(home).toBeInTheDocument();
  });

  test('testando se existe um link com o texto "About"', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', {
      name: 'About',
    });

    expect(about).toBeInTheDocument();
  });

  test('testando se existe um link com o texto "Favorites PoKémons"', () => {
    renderWithRouter(<App />);
    const favorites = screen.getByRole('link', {
      name: 'Favorite Pokémons',
    });
    expect(favorites).toBeInTheDocument();
  });
  test('verifica se a Home esta sendo direcionada para "/"', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText('Home'));
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
  test('verifica se About esta sendo direcionada para "/about"', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/About/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });
  test('verifica se Favorites esta sendo direcionada para "/favorites"', () => {
    const { history } = renderWithRouter(<App />);
    fireEvent.click(screen.getByText(/Favorite Pokémons/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });
});
