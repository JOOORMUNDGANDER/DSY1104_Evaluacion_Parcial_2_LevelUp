import React, { useState } from 'react';
import '../styles/Registro.css'; // Importa tu CSS

function generarCodigoReferido(email) {
  const nombre = email.split('@')[0];
  const random = Math.floor(Math.random() * 10000);
  return `LVUP-${nombre}-${random}`;
}

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
      password,
      fechaNacimiento,
      descuento,
      puntos,
      nivel: 'Bronce',
      nombre: email.split('@')[0],
      codigoReferido: generarCodigoReferido(email)
    };

    // Guardar en localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Registro exitoso");
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Registro</h2>
      <form onSubmit={handleSubmit} className="registro-form">
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

        {/* Botón */}
        <button type="submit" className="registro-btn">
          Registrarse
        </button>
      </form>

      <p className="registro-terminos">
        Al registrarte, aceptas nuestros <a href="#">Términos</a> y <a href="#">Política de Privacidad</a>.
      </p>
    </div>
  );
}

export default Registro;
