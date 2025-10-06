import React from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';

function ProductCard({ producto, enOferta, onNotificacion, onClickDetalle }) {
  const { dispatch } = useCarrito();

  // Si se pasa onClickDetalle, lo usa; si no, hace nada (permite usar el card para catálogo o para modal/modal)
  const handleCardClick = onClickDetalle
    ? () => onClickDetalle(producto)
    : () => {};

  const agregarAlCarrito = (e) => {
    e.stopPropagation(); // para que no abra el modal al clickear el botón
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    if (onNotificacion) onNotificacion(`${producto.nombre} agregado al carrito`);
  };

  return (
    <div
      className="producto-oferta"
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {enOferta && <div className="etiqueta-oferta">¡EN OFERTA!</div>}
      <div className="producto-imagen">
        <img src={producto.imagen} alt={producto.nombre} />
      </div>
      <div className="producto-oferta-info">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        {producto.precioOriginal && (
          <p className="precio-original">
            ${producto.precioOriginal.toLocaleString()} CLP
          </p>
        )}
        <p className="precio-oferta">
          ${producto.precio.toLocaleString()} CLP
        </p>
        {producto.descuento && (
          <p className="descuento">{producto.descuento}% OFF</p>
        )}
        <button onClick={agregarAlCarrito}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
