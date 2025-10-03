// src/components/ProductCard.jsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';

function ProductCard({ producto }) {
  const { dispatch } = useCarrito();

  const agregarAlCarrito = () => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
  };

  return (
    <div
      className="product-card"
      style={{
        border: '1px solid #1E90FF',
        borderRadius: '10px',
        padding: '1rem',
        color: 'white',
        backgroundColor: '#1a1a1a',
        transition: 'transform 0.2s, box-shadow 0.2s',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      aria-label={`Producto: ${producto.nombre}`}
    >
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
          borderRadius: '8px',
          marginBottom: '0.5rem'
        }}
        onError={(e) => {
          e.target.src = "/assets/images/placeholder.jpg"; // Imagen de respaldo
        }}
      />
      <h3
        style={{
          margin: '0.5rem 0',
          fontSize: '1.1rem',
          fontWeight: '500',
          flex: 1
        }}
      >
        {producto.nombre}
      </h3>
      <p
        style={{
          margin: '0.2rem 0',
          color: '#39FF14',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}
      >
        ${producto.precio.toLocaleString()} CLP
      </p>
      <button
        onClick={agregarAlCarrito}
        className="btn"
        style={{
          padding: '0.7rem',
          backgroundColor: '#39FF14',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: 'auto',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#32CD32'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#39FF14'}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
