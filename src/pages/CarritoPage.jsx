// src/pages/CarritoPage.jsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';

function CarritoPage() {
  const { state, dispatch } = useCarrito();

  if (state.items.length === 0) {
    return (
      <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
        <h2>Carrito vacío</h2>
        <p>Aún no has agregado productos.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Tu Carrito</h2>
      <div style={{ display: 'grid', gap: '1rem', margin: '2rem 0' }}>
        {state.items.map(item => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', background: '#111', borderRadius: '8px' }}>
            <div>
              <h3>{item.nombre}</h3>
              <p>${item.precio} x {item.cantidad}</p>
            </div>
            <div>
              <strong>${item.precio * item.cantidad}</strong>
              <button
                onClick={() => dispatch({ type: 'ELIMINAR_PRODUCTO', id: item.id })}
                style={{ marginLeft: '1rem', background: 'red', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ margin: '2rem 0', fontSize: '1.2rem' }}>
        <p><strong>Total productos:</strong> {state.cantidad}</p>
        <p><strong>Total a pagar:</strong> ${state.total} CLP</p>
      </div>

      <button
        onClick={() => dispatch({ type: 'VACIAR_CARRITO' })}
        style={{ background: 'gray', color: 'white', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer' }}
      >
        Vaciar carrito
      </button>

      <button
        style={{ background: '#39FF14', color: 'black', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '5px', cursor: 'pointer', marginLeft: '1rem' }}
      >
        Proceder al pago
      </button>
    </div>
  );
}

export default CarritoPage;
