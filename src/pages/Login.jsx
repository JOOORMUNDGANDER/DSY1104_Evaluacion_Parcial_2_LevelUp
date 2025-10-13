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
      alert("No tienes cuenta. Regístrate para vivir la experiencia gamer completa.");
      return;
    }

    if (usuario.email === email && usuario.password === password) {
      alert("¡Bienvenido de vuelta, gamer! 🎮");
      navigate('/perfil');
    } else {
      alert("Correo o contraseña incorrectos. Intenta de nuevo.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Iniciar Sesión</h2>
      <p style={{ textAlign:'center', color:'#D3D3D3', marginBottom:'1.8rem', fontSize:'1.08rem'}}>
        Ingresa tu correo y contraseña para acceder a <span style={{color:'#FFD700', fontWeight:700}}>Level Up Gamer</span>
      </p>
      <form onSubmit={handleSubmit} className="login-form">
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: 12,
            top: 13,
            color: '#9D4EDD',
            fontSize: '1.38em'
          }}>📧</span>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-input"
            style={{ paddingLeft: '2.4em' }}
            autoFocus
          />
        </div>
        <div style={{ position: 'relative' }}>
          <span style={{
            position: 'absolute',
            left: 12,
            top: 13,
            color: '#FFD700',
            fontSize: '1.38em'
          }}>🔒</span>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
            style={{ paddingLeft: '2.4em' }}
          />
        </div>
        <button
          type="submit"
          className="login-btn"
        >
          🚀 Entrar
        </button>
      </form>
      <p className="login-registro">
        ¿No tienes cuenta? <span
          onClick={() => navigate('/registro')}
          className="login-link"
          tabIndex={0}
        >
          Regístrate
        </span>
      </p>
      <p style={{
        marginTop:'0.7em',
        textAlign:'center',
        fontSize:'.93em',
        color:'#FFD700',
        opacity: '.78'
      }}>
        ¿Olvidaste tu correo? El usuario se guarda en este navegador. <br />
        <span style={{color:'#39FF14'}}>Crea cuenta nueva si lo necesitas.</span>
      </p>
    </div>
  );
}

export default Login;
