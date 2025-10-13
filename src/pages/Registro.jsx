import React, { useState } from 'react';
import '../styles/Registro.css';

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
    const edad = new Date().getFullYear() - new Date(fechaNacimiento).getFullYear();
    if (edad < 18) {
      alert("Debes tener al menos 18 años");
      return;
    }
    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }
    const descuento = email.endsWith('@duocuc.cl') ? 20 : 0;
    let puntos = 100;
    if (codigoReferido) {
      puntos += 100;
    }
    const usuario = {
      email, password, fechaNacimiento,
      descuento, puntos,
      nivel: 'Bronce',
      nombre: email.split('@')[0],
      codigoReferido: generarCodigoReferido(email)
    };
    localStorage.setItem('usuario', JSON.stringify(usuario));
    alert("Registro exitoso. ¡Ya puedes iniciar sesión gamer!");
  };

  return (
    <div className="registro-container">
      <h2 className="registro-title">Crear Cuenta Gamer</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <div style={{position:'relative'}}>
          <span style={{
            position:'absolute', left:14, top:13,
            color:'#9D4EDD', fontSize:'1.36em'
          }}>📧</span>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="registro-input"
            style={{paddingLeft:'2.4em'}}
            autoFocus
          />
        </div>

        <div style={{position:'relative'}}>
          <span style={{
            position:'absolute', left:14, top:13,
            color:'#FFD700', fontSize:'1.33em'
          }}>🔒</span>
          <input
            type="password"
            placeholder="Contraseña (mín. 6 caracteres)"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="registro-input"
            style={{paddingLeft:'2.3em'}}
          />
        </div>

        <div style={{position:'relative'}}>
          <span style={{
            position:'absolute', left:14, top:13,
            color:'#39FF14', fontSize:'1.38em'
          }}>🎂</span>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={e => setFechaNacimiento(e.target.value)}
            required
            className="registro-input"
            style={{paddingLeft:'2.3em'}}
          />
        </div>

        <div style={{position:'relative'}}>
          <span style={{
            position:'absolute', left:14, top:14,
            color:'#9D4EDD', fontSize:'1.2em'
          }}>🏷️</span>
          <input
            type="text"
            placeholder="Código de referido (opcional)"
            value={codigoReferido}
            onChange={e => setCodigoReferido(e.target.value)}
            className="registro-input"
            style={{paddingLeft:'2.3em'}}
          />
        </div>

        <button type="submit" className="registro-btn">
          🚀 Registrarse
        </button>
        <div style={{
          margin:'1em 0 0 0', textAlign:'center', fontSize:'0.95em', color:'#FFD700'
        }}>
          Correo <span style={{color:'#9D4EDD'}}>@duocuc.cl</span> obtiene <b style={{color:'#39FF14'}}>20% de descuento</b>
        </div>
      </form>
      <p className="registro-terminos">
        Al registrarte, aceptas nuestros <a href="#">Términos</a> y <a href="#">Política de Privacidad</a>.
      </p>
    </div>
  );
}

export default Registro;
