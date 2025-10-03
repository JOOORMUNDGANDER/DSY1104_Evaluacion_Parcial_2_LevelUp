// src/pages/Ofertas.jsx
import React from 'react';
import { productos } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';
import '../styles/Ofertas.css';

function Ofertas() {
  const { dispatch } = useCarrito();

  const productosEnOferta = productos.filter(p => p.oferta);

  const agregarAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    alert(`${producto.nombre} agregado al carrito`);
  };

  return (
    <div className="ofertas-container">
      <h1>🔥 Ofertas Especiales</h1>
      <p>Aprovecha estos descuentos por tiempo limitado</p>

      {productosEnOferta.length === 0 ? (
        <p>No hay productos en oferta por ahora.</p>
      ) : (
        <div className="ofertas-grid">
          {productosEnOferta.map(p => (
            <div key={p.id} className="producto-oferta">
              {/* Etiqueta de oferta */}
              <div className="etiqueta-oferta">¡EN OFERTA!</div>

              {/* Imagen */}
              <div className="producto-imagen">
                <img src={p.imagen} alt={p.nombre} />
              </div>

              {/* Info */}
              <div className="producto-oferta-info">
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>

                {p.precioOriginal && (
                  <p className="precio-original">${p.precioOriginal.toLocaleString()} CLP</p>
                )}
                
                <p className="precio-oferta">${p.precio.toLocaleString()} CLP</p>
                
                {p.descuento && (
                  <p className="descuento">{p.descuento}% OFF</p>
                )}
                
                <button onClick={() => agregarAlCarrito(p)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Ofertas;
