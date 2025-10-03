// src/pages/Catalogo.jsx
import React, { useState } from 'react';
import { productos } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';
import ModalProducto from '../components/ModalProducto';
import '../styles/Catalogo.css';

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [precioMax, setPrecioMax] = useState(1000000);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null); // ✅ Estado para el modal

  const { dispatch } = useCarrito();

  const agregarAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    alert(`${producto.nombre} agregado al carrito`);
  };

  const productosFiltrados = productos.filter(p =>
    (!categoria || p.categoria === categoria) &&
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    p.precio <= precioMax
  );

  return (
    <div className="catalogo-container">
      <h2>Catálogo de Productos</h2>

      {/* Filtros */}
      <div className="filtros-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="filtro-input"
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="filtro-select"
        >
          <option value="">Todas las categorías</option>
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

        <div className="rango-precio">
          <label>
            Precio máximo: <strong>${Number(precioMax).toLocaleString()}</strong>
          </label>
          <input
            type="range"
            min="0"
            max="1000000"
            value={precioMax}
            onChange={(e) => setPrecioMax(e.target.value)}
          />
        </div>
      </div>

      {/* Productos */}
      {productosFiltrados.length === 0 ? (
        <div className="sin-resultados">
          <p>😓 No se encontraron productos con esos filtros.</p>
        </div>
      ) : (
        <div className="catalogo-grid">
          {productosFiltrados.map(p => (
            <div
              key={p.id}
              className="producto-card"
              onClick={() => setProductoSeleccionado(p)} // ✅ Abre el modal
              style={{ cursor: 'pointer' }}
            >
              <div className="producto-imagen">
                <img src={p.imagen} alt={p.nombre} />
              </div>
              <div className="producto-info">
                <h3>{p.nombre}</h3>
                <p>{p.descripcion}</p>
                <p className="producto-precio">${p.precio.toLocaleString()} CLP</p>
                {p.oferta && <p className="producto-oferta">🔥 ¡En oferta!</p>}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ Evita abrir el modal al hacer clic en el botón
                    agregarAlCarrito(p);
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {productoSeleccionado && (
        <ModalProducto
          producto={productoSeleccionado}
          onClose={() => setProductoSeleccionado(null)}
        />
      )}
    </div>
  );
}

export default Catalogo;
