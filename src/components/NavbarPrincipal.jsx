// src/components/NavbarPrincipal.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext'; // Ajusta la ruta si usas `context` en inglés
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/NavbarPrincipal.css";

function NavbarPrincipal() {
  const { state } = useCarrito(); // Obtiene el estado del carrito

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-xl">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo Level-Up Gamer" width="120" />
        </Link>

        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            {/* Enlaces principales */}
            {['Inicio', 'Catalogo', 'Ofertas', 'Servicios', 'Contacto'].map((item) => (
              <li key={item} className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'text-primary fw-bold' : ''}`
                  }
                  to={item === 'Inicio' ? '/' : `/${item.toLowerCase()}`}
                  end // Para que "Inicio" solo active si es exacto "/"
                >
                  {item}
                </NavLink>
              </li>
            ))}

            {/* Enlace al carrito con badge */}
            <li className="nav-item ms-3">
              <Link
                className="nav-link position-relative"
                to="/carrito"
              >
                Carrito
                {state.cantidad > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success text-black"
                    style={{ fontSize: '0.75rem' }}
                  >
                    {state.cantidad}
                    <span className="visually-hidden">productos en el carrito</span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarPrincipal;
