// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    if (!usuario) {
      alert("No tienes cuenta. Regístrate.");
      return;
    }

    // Validar correo y contraseña
    if (usuario.email === email && usuario.password === password) {
      alert("¡Bienvenido de vuelta!");
      navigate('/perfil'); // ✅ Mejor que window.location.href
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="login-container" style={{
      padding: '2rem',
      color: 'white',
      maxWidth: '400px',
      margin: '4rem auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{ color: '#39FF14', marginBottom: '1.5rem' }}>Iniciar Sesión</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
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
          Entrar
        </button>
      </form>

      <p style={{
        marginTop: '1rem',
        fontSize: '0.9rem',
        textAlign: 'center',
        opacity: 0.8
      }}>
        ¿No tienes cuenta? <span
          onClick={() => navigate('/registro')}
          style={{ color: '#39FF14', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Regístrate
        </span>
      </p>
    </div>
  );
}

// Estilos compactos
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

export default Login;
