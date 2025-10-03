// src/pages/CarritoPage.jsx
import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import CartItem from '../components/CartItem';
import '../styles/Carrito.css';

const CarritoPage = () => {
  const { state, dispatch } = useCarrito();

  const handleUpdateQuantity = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) return;
    dispatch({ type: 'ACTUALIZAR_CANTIDAD', id, cantidad: nuevaCantidad });
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: 'ELIMINAR_PRODUCTO', id });
  };

  const handleClearCart = () => {
    if (window.confirm('¿Estás seguro de vaciar el carrito? Esta acción no se puede deshacer.')) {
      dispatch({ type: 'VACIAR_CARRITO' });
    }
  };

  if (state.items.length === 0) {
    return (
      <div className="carrito-vacio">
        <div>🛒</div>
        <h2>Carrito vacío</h2>
        <p>Aún no has agregado productos a tu carrito.</p>
      </div>
    );
  }

  return (
    <div className="carrito-container">
      <h1>Tu Carrito de Compras</h1>

      <div className="carrito-tabla">
        {state.items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
          />
        ))}
      </div>

      <div className="totales">
        <div>
          <div>Productos en carrito: <strong>{state.cantidad}</strong></div>
          <div className="total-precio">
            Total a pagar: ${(state.total).toLocaleString()} CLP
          </div>
        </div>

        <button className="btn-vaciar" onClick={handleClearCart}>
          Vaciar carrito
        </button>
        <button className="btn-comprar">
          Proceder al pago
        </button>
      </div>
    </div>
  );
};

export default CarritoPage;
