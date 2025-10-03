// src/pages/Registro.jsx
import React, { useState } from 'react';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [codigoReferido, setCodigoReferido] = useState('');

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

    // Calcular descuento
    const descuento = email.endsWith('@duocuc.cl') ? 20 : 0;

    // Calcular puntos
    let puntos = 100;
    if (codigoReferido) {
      puntos += 100;
    }

    // Crear usuario
    const usuario = {
      email,
      password, // ✅ Guardamos la contraseña (en producción, nunca en texto plano)
      fechaNacimiento,
      descuento,
      puntos,
      nivel: 'Bronce',
      nombre: email.split('@')[0] // Nombre por defecto
    };

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Registro exitoso");
  };

  return (
    <div className="registro-container" style={{
      padding: '2rem',
      color: 'white',
      maxWidth: '400px',
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#39FF14', marginBottom: '1.5rem' }}>Registro</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Email */}
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Contraseña */}
        <input
          type="password"
          placeholder="Contraseña (mín. 6 caracteres)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Fecha de nacimiento */}
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
          style={inputStyle}
        />

        {/* Código de referido (opcional) */}
        <input
          type="text"
          placeholder="Código de referido (opcional)"
          value={codigoReferido}
          onChange={(e) => setCodigoReferido(e.target.value)}
          style={inputStyle}
        />

        {/* Botón */}
        <button
          type="submit"
          style={{
            ...inputStyle,
            background: '#39FF14',
            color: 'black',
            fontWeight: '600',
            cursor: 'pointer',
            padding: '0.8rem',
            marginTop: '1rem'
          }}
        >
          Registrarse
        </button>
      </form>

      <p style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        textAlign: 'center',
        opacity: 0.8
      }}>
        Al registrarte, aceptas nuestros <a href="#" style={{ color: '#39FF14' }}>Términos</a> y <a href="#" style={{ color: '#39FF14' }}>Política de Privacidad</a>.
      </p>
    </div>
  );
}

// Estilos compactos para inputs
const inputStyle = {
  padding: '0.7rem',
  marginBottom: '0.8rem',
  borderRadius: '6px',
  border: '1px solid #444',
  background: '#1a1a1a',
  color: 'white',
  fontSize: '0.95rem',
  width: '100%'
};

export default Registro;
