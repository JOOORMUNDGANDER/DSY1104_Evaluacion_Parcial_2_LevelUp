// src/components/ProductoDetalle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { productos } from '../data/productos';

function ProductoDetalle() {
  const { id } = useParams(); // Obtiene el ID de la URL
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="producto-detalle" style={{ padding: '2rem', color: 'white', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>
        <img
          src={producto.imagen}
          alt={producto.nombre}
          style={{ width: '400px', height: '400px', objectFit: 'cover', borderRadius: '10px' }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ color: '#39FF14', margin: '0 0 0.5rem 0' }}>{producto.nombre}</h1>
          <p><strong>Código:</strong> {producto.codigo}</p>
          <p><strong>Categoría:</strong> {producto.categoria.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
          <p><strong>Precio:</strong> <span style={{ fontSize: '1.5rem', color: '#1E90FF' }}>${producto.precio} CLP</span></p>
          <p style={{ color: '#D3D3D3' }}>{producto.descripcion}</p>
          <button
            className="btn"
            style={{ padding: '1rem 2rem', fontSize: '1.2rem', marginTop: '1rem' }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;
