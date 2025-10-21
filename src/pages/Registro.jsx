// src/pages/Registro.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registro.css';

function generarCodigoReferido(email) {
  const nombre = email.split('@')[0];
  const random = Math.floor(Math.random() * 10000);
  return `LVUP-${nombre}-${random}`;
}

function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [codigoReferido, setCodigoReferido] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar edad
    const edad = new Date().getFullYear() - new Date(fechaNacimiento).getFullYear();
    if (edad < 18) {
      alert("Debes tener al menos 18 años");
      return;
    }

    // Validar contraseña
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    // Validar nombre
    if (!nombre.trim()) {
      alert("Debes ingresar tu nombre");
      return;
    }

    // Calcular descuento
    const descuento = email.endsWith('@duocuc.cl') ? 20 : 0;

    // Calcular puntos
    let puntos = 100;
    if (codigoReferido) {
      puntos += 100;
    }

    // Tomar el primer nombre
    const primerNombre = nombre.trim().split(' ')[0];

    // Crear usuario
    const usuario = {
      nombre: primerNombre,
      nombreCompleto: nombre.trim(),
      email,
      password,
      fechaNacimiento,
      descuento,
      puntos,
      nivel: 'Bronce',
      codigoReferido: generarCodigoReferido(email)
    };

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Registro exitoso. ¡Bienvenido/a " + primerNombre + "!");
    navigate('/perfil');
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Crear Cuenta Gamer</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        {/* Nombre */}
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
          className="registro-input"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="registro-input"
        />

        {/* Contraseña */}
        <input
          type="password"
          placeholder="Contraseña (mín. 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="registro-input"
        />

        {/* Fecha de nacimiento */}
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
          className="registro-input"
        />

        {/* Código de referido (opcional) */}
        <input
          type="text"
          placeholder="Código de referido (opcional)"
          value={codigoReferido}
          onChange={(e) => setCodigoReferido(e.target.value)}
          className="registro-input"
        />

        <button type="submit" className="registro-btn">
          🚀 Registrarse
        </button>
        <div style={{
          margin: '1em 0 0 0',
          textAlign: 'center',
          fontSize: '0.95em',
          color: '#FFD700'
        }}>
          Correo <span style={{ color: '#9D4EDD' }}>@duocuc.cl</span> obtiene <b style={{ color: '#39FF14' }}>20% de descuento</b>
        </div>
      </form>
      <p className="registro-terminos">
        Al registrarte, aceptas nuestros <a href="#">Términos</a> y <a href="#">Política de Privacidad</a>.
      </p>
    </div>
  );
}

export default Registro;
