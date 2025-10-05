// src/components/ProductoDetalle.jsx
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { productos } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';
import '../styles/ProductoDetalle.css';

function ProductoDetalle() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCarrito();

  const producto = productos.find(p => String(p.id) === String(id));

  if (!producto) {
    return (
      <div className="detalle-container">
        <h2>Producto no encontrado 😓</h2>
        <button className="volver-btn" onClick={() => navigate(-1)}>
          Volver al catálogo
        </button>
      </div>
    );
  }

  const agregarAlCarrito = () => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
  };

  const comprarAhora = () => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    navigate('/carrito');
  };

  return (
    <div className="detalle-container">
      <div className="detalle-tarjeta">
        <div className="detalle-imagen">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p><strong>Código:</strong> {producto.codigo}</p>
          <p><strong>Categoría:</strong> {producto.categoria.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
          <p className="detalle-precio">${producto.precio.toLocaleString()} CLP</p>
          {producto.oferta && <p className="detalle-oferta">🔥 ¡En oferta!</p>}
          <p className="detalle-descripcion">{producto.descripcion}</p>
          <div className="detalle-botones">
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
            <button onClick={comprarAhora} className="comprar-btn">Comprar ahora</button>
            <button className="volver-btn" onClick={() => navigate(-1)}>Volver al catálogo</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
