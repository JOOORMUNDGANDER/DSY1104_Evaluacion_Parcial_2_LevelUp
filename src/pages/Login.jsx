// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const raw = localStorage.getItem('usuario');
    const usuario = raw ? JSON.parse(raw) : null;

    if (!usuario) {
      alert("No tienes cuenta. Regístrate.");
      return;
    }

    // Validar correo y contraseña
    if (usuario.email === email && usuario.password === password) {
      alert("¡Bienvenido de vuelta!");
      navigate('/perfil');
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <button
          type="submit"
          className="login-btn"
        >
          Entrar
        </button>
      </form>
      <p className="login-registro">
        ¿No tienes cuenta? <span
          onClick={() => navigate('/registro')}
          className="login-link"
        >
          Regístrate
        </span>
      </p>
    </div>
  );
}

export default Login;
