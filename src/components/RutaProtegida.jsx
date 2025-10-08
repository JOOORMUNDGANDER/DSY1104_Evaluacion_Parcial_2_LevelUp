// src/components/RutaProtegida.jsx
import { Navigate } from 'react-router-dom';

function RutaProtegida({ children }) {
  const raw = localStorage.getItem('usuario');
  const usuario = raw ? JSON.parse(raw) : null;

  if (!usuario) {
    // Si no hay usuario, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si hay usuario, permite el acceso
  return children;
}

export default RutaProtegida;
