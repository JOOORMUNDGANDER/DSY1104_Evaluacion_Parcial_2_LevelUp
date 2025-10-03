import React, { useState } from 'react';
import './styles/Registro.css';

function Registro() {
  const [email, setEmail] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const edad = new Date().getFullYear() - new Date(fechaNacimiento).getFullYear();
    if (edad < 18) {
      alert("Debes tener al menos 18 años");
      return;
    }

    const descuento = email.endsWith('@duocuc.cl') ? 20 : 0;

    // Guardar usuario (simulado o con Firebase)
    const usuario = {
      email,
      fechaNacimiento,
      descuento,
      puntos: 100, // por registrarse
      nivel: 'Bronce'
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Registro exitoso");
  };

  return (
    <div className="registro-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="date"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

const [codigoReferido, setCodigoReferido] = useState('');

// Dentro de handleSubmit
if (codigoReferido) {
  // Aquí puedes guardar que el usuario fue referido
  // y otorgar puntos al referidor (simulado o con base de datos)
  alert(`Gracias por usar el código ${codigoReferido}. ¡Ganaste 100 puntos LevelUp!`);
}


export default Registro;
