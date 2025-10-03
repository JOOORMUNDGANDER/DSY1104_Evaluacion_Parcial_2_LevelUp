// src/components/NavbarPrincipal.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import '../styles/NavbarPrincipal.css';

function NavbarPrincipal() {
  const { state } = useCarrito();
  const usuario = JSON.parse(localStorage.getItem('usuario'));
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ Estado para el menú

  const handleLogout = () => {
    localStorage.removeItem('usuario');
    alert('Sesión cerrada');
    navigate('/');
    setDropdownOpen(false);
  };

  const primerNombre = usuario
    ? usuario.nombre?.split(' ')[0] || usuario.email.split('@')[0]
    : '';

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Level-Up Gamer</Link>

      <div className="navbar-links">
        <Link to="/catalogo" className="navbar-link">Catálogo</Link>
        <Link to="/ofertas" className="navbar-link navbar-link-ofertas">🔥 Ofertas</Link>
        <Link to="/eventos" className="navbar-link">Eventos</Link>
        <Link to="/blog" className="navbar-link">Blog</Link>
        <Link to="/contacto" className="navbar-link">Contacto</Link>
      </div>

      <div className="navbar-user">
        {usuario ? (
          <div
            className="navbar-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="navbar-username">👤 {primerNombre}</span>

            {dropdownOpen && (
              <div className="navbar-dropdown-content">
                <Link to="/perfil" className="dropdown-item">Mi perfil</Link>
                <Link to="/pedidos" className="dropdown-item">Mis pedidos</Link>
                <button onClick={handleLogout} className="dropdown-item btn-logout">
                  Salir
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/login" className="navbar-login-link">Ingresar</Link>
            <Link to="/registro" className="navbar-login-link">Registro</Link>
          </>
        )}

        <Link to="/carrito" className="navbar-cart">
          🛒 Carrito
          {state.cantidad > 0 && (
            <span className="navbar-cart-count">{state.cantidad}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default NavbarPrincipal;
