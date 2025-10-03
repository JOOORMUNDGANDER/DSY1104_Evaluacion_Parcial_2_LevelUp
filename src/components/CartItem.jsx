// src/components/CartItem.jsx
import React from 'react';

function CartItem({ item, onUpdateQuantity, onRemoveItem }) {
  return (
    <div className="carrito-item">
      <img src={item.imagen} alt={item.nombre} />
      
      <div className="carrito-item-info">
        <h3>{item.nombre}</h3>
        <p>Código: {item.codigo}</p>
      </div>

      <div className="carrito-item-quantity">
        <div className="cantidad-control">
          <button
            className="cantidad-btn"
            onClick={() => onUpdateQuantity(item.id, item.cantidad - 1)}
            disabled={item.cantidad <= 1}
          >
            −
          </button>
          <span className="cantidad-text">{item.cantidad}</span>
          <button
            className="cantidad-btn"
            onClick={() => onUpdateQuantity(item.id, item.cantidad + 1)}
          >
            +
          </button>
        </div>
      </div>

      <p className="carrito-item-price">
        ${(item.precio * item.cantidad).toLocaleString()} CLP
      </p>

      <button
        className="btn-eliminar"
        onClick={() => onRemoveItem(item.id)}
        aria-label="Eliminar producto"
      >
        ×
      </button>
    </div>
  );
}

export default CartItem;
