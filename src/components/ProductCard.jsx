// src/components/ProductCard.jsx
import React from 'react';
import '../styles/ProductCard.css';

function ProductCard({ producto, agregarAlCarrito }) {
  return (
    <div className="product-card" onClick={() => agregarAlCarrito(producto)}>
      {/* Etiqueta de oferta */}
      {producto.oferta && (
        <div className="product-card-badge">¡EN OFERTA!</div>
      )}

      <img src={producto.imagen} alt={producto.nombre} />
      <h3>{producto.nombre}</h3>
      <p className="price">${producto.precio.toLocaleString()}</p>
      
      {/* Descripción (visible al hacer hover) */}
      <p className="description">{producto.descripcion}</p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          agregarAlCarrito(producto);
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ProductCard;
