import React, { useState } from 'react';
import './styles/Perfil.css';

function Perfil() {
  const usuario = JSON.parse(localStorage.getItem('usuario')) || {};
  const [nombre, setNombre] = useState(usuario.nombre || '');
  const recomendaciones = productos.filter(p => p.categoria === 'accesorios');
  const guardarPerfil = () => {
    const usuarioActualizado = { ...usuario, nombre };
    localStorage.setItem('usuario', JSON.stringify(usuarioActualizado));
    alert("Perfil actualizado");
  };

  return (
    <div className="perfil-container">
      <h2>Mi Perfil</h2>
      <input
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Nombre"
      />
      <p><strong>Correo:</strong> {usuario.email}</p>
      <p><strong>Puntos LevelUp:</strong> {usuario.puntos || 100}</p>
      <p><strong>Nivel:</strong> {usuario.nivel}</p>
      <p><strong>Descuento:</strong> {usuario.descuento || 0}%</p>
      <button onClick={guardarPerfil}>Guardar</button>
    </div>
  );
}

export default Perfil;
