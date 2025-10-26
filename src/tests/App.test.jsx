import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../App';

describe('App', function() {
  let container;
  beforeEach(function() {
    container = document.createElement('div');
    document.body.appendChild(container);
    createRoot(container).render(<App />);
  });
  afterEach(function() {
    document.body.removeChild(container);
  });
  it('debería renderizar el título principal', function() {
    const heading = container.querySelector('h1');
    expect(heading).toBeDefined();
    expect(heading.textContent).toContain('Bienvenido');
  });
});
