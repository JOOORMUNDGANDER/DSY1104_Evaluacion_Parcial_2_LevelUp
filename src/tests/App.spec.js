import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarritoProvider } from '../context/CarritoContext';
import App from '../App';

describe('App', () => {
  it('debería mostrar el logo principal', () => {
    render(
      <CarritoProvider>
        <App />
      </CarritoProvider>
    );
    const logos = screen.getAllByText('Level-Up Gamer');
    expect(logos.length).toBeGreaterThan(0);
  });
});
