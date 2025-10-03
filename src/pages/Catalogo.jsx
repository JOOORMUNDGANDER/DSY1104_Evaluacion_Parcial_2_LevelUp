// src/pages/Catalogo.jsx
import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import '../styles/Catalogo.css';
import { productos } from '../data/productos'; // ✅ Usamos los 50 productos

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precioMax, setPrecioMax] = useState(1000000);

  const productosFiltrados = productos.filter(p =>
    (!categoria || p.categoria === categoria) &&
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    p.precio <= precioMax
  );

  const agregarAlCarrito = (producto) => {
    console.log('Agregado:', producto);
  };

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Productos</h2>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        style={{ padding: '0.5rem', width: '80%', maxWidth: '400px', margin: '1rem 0' }}
      />

      {/* Filtro por categoría */}
      <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
        <option value="">Todas</option>
        <option value="juegos-mesa">Juegos de Mesa</option>
        <option value="accesorios">Accesorios</option>
        <option value="consolas">Consolas</option>
        <option value="computadores-gamers">Computadores Gamers</option>
        <option value="sillas-gamers">Sillas Gamers</option>
        <option value="mouse">Mouse</option>
        <option value="mousepad">Mousepad</option>
        <option value="poleras-personalizadas">Poleras Personalizadas</option>
        <option value="polerones-gamers">Polerones Gamers</option>
        <option value="perifericos-streaming">Periféricos para Streaming</option>
        <option value="iluminacion-rgb">Iluminación RGB</option>
      </select>

      {/* Filtro por precio */}
      <div style={{ margin: '1rem 0' }}>
        <label>Precio máximo: ${precioMax}</label>
        <input
          type="range"
          min="0"
          max="1000000"
          value={precioMax}
          onChange={(e) => setPrecioMax(e.target.value)}
          style={{ width: '80%' }}
        />
      </div>

      {/* Mensaje si no hay productos */}
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos.</p>
      ) : (
        <div className="catalog-grid" style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {productosFiltrados.map(p => (
            <ProductCard
              key={p.id}
              producto={p}
              agregarAlCarrito={agregarAlCarrito}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Catalogo;
