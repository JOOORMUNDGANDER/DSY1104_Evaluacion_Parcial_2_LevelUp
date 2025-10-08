// src/pages/Ofertas.jsx
import React, { useState } from 'react';
import { productos } from '../data/productos';
import { useCarrito } from '../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Catalogo.css';

function Ofertas() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [precioMin, setPrecioMin] = useState(0);
  const [precioMax, setPrecioMax] = useState(3000000);
  const [toast, setToast] = useState({ show: false, nombre: '' });

  const { dispatch } = useCarrito();
  const navigate = useNavigate();

  const agregarAlCarrito = (producto) => {
    dispatch({ type: 'AGREGAR_PRODUCTO', producto });
    setToast({ show: true, nombre: producto.nombre });
    setTimeout(() => setToast({ show: false, nombre: '' }), 2000);
  };

  const toggleCategoria = (categoria) => {
    setCategoriasSeleccionadas(prev =>
      prev.includes(categoria)
        ? prev.filter(c => c !== categoria)
        : [...prev, categoria]
    );
  };

  const categorias = [
    'juegos-mesa',
    'accesorios',
    'consolas',
    'computadores-gamers',
    'sillas-gamers',
    'mouse',
    'mousepad',
    'poleras-personalizadas',
    'polerones-gamers',
    'perifericos-streaming',
    'iluminacion-rgb'
  ];

  const formatearCategoria = (categoria) => {
    return categoria.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  // Solo productos en oferta
  const productosFiltrados = productos.filter(p =>
    p.oferta &&
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
    (categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(p.categoria)) &&
    p.precio >= precioMin && p.precio <= precioMax
  );

  const limpiarFiltros = () => {
    setBusqueda('');
    setCategoriasSeleccionadas([]);
    setPrecioMin(0);
    setPrecioMax(3000000);
  };

  return (
    <div className="catalogo-container">
      <h2>Ofertas Especiales</h2>

      {toast.show && (
        <div className="toast-carrito">
          <span role="img" aria-label="carrito">🛒</span>
          <b>{toast.nombre}</b> agregado al carrito
        </div>
      )}

      <div className="catalogo-layout">
        <aside className="filtros-lateral">
          <div className="filtro-seccion">
            <h4>🔍 Búsqueda</h4>
            <input
              type="text"
              placeholder="Buscar productos en oferta..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="filtro-input"
            />
          </div>
          <div className="filtro-seccion">
            <h4>💰 Rango de Precios</h4>
            <div className="filtro-precio-avanzado">
              <div className="precio-inputs">
                <div className="precio-campo">
                  <label>Mínimo</label>
                  <input
                    type="number"
                    value={precioMin}
                    onChange={(e) => setPrecioMin(Number(e.target.value))}
                    className="precio-input"
                    min="0"
                    max={precioMax}
                  />
                </div>
                <div className="precio-campo">
                  <label>Máximo</label>
                  <input
                    type="number"
                    value={precioMax}
                    onChange={(e) => setPrecioMax(Number(e.target.value))}
                    className="precio-input"
                    min={precioMin}
                    max="3000000"
                  />
                </div>
              </div>
              <div className="precio-display">
                <span>${Number(precioMin).toLocaleString()} - ${Number(precioMax).toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="filtro-seccion">
            <h4>📂 Categorías</h4>
            <div className="categorias-checkboxes">
              {categorias.map(categoria => (
                <label key={categoria} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={categoriasSeleccionadas.includes(categoria)}
                    onChange={() => toggleCategoria(categoria)}
                    className="checkbox-categoria"
                  />
                  <span className="checkmark"></span>
                  {formatearCategoria(categoria)}
                </label>
              ))}
            </div>
          </div>
          <button onClick={limpiarFiltros} className="limpiar-filtros">
            🗑️ Limpiar filtros
          </button>
          <div className="contador-resultados">
            {productosFiltrados.length} productos en oferta encontrados
          </div>
        </aside>
        <section className="catalogo-grid">
          {productosFiltrados.length === 0 ? (
            <div className="sin-resultados">
              <p>😓 No se encontraron ofertas con esos filtros.</p>
            </div>
          ) : (
            productosFiltrados.map(p => (
              <div
                key={p.id}
                className="producto-card"
                style={{ position: 'relative', cursor: 'pointer' }}
                onClick={() => navigate(`/producto/${p.id}`)}
              >
                {/* Sticker visual solo para ofertas */}
                <span className="sticker-oferta">¡OFERTA!</span>
                <div className="producto-imagen">
                  <img src={p.imagen} alt={p.nombre} />
                </div>
                <div className="producto-info">
                  <h3>{p.nombre}</h3>
                  <p>{p.descripcion}</p>
                  <p className="producto-precio">${p.precio.toLocaleString()} CLP</p>
                  {p.precioOriginal && (
                    <span className="precio-original">{p.precioOriginal.toLocaleString()} CLP</span>
                  )}
                  {p.descuento && <span className="producto-oferta">-{p.descuento}%</span>}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      agregarAlCarrito(p);
                    }}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

export default Ofertas;
