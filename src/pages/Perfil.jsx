// src/pages/Perfil.jsx
import React, { useState } from 'react';
import { productos } from '../data/productos';

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
    <div className="perfil-container" style={{
      padding: '2rem',
      color: 'white',
      maxWidth: '1000px',
      margin: '2rem auto',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '2rem',
        borderBottom: '1px solid #444',
        paddingBottom: '1rem'
      }}>
        <div>
          <h2 style={{ margin: '0 0 0.5rem 0', color: '#39FF14' }}>Mi Perfil</h2>
          <p style={{ margin: '0', opacity: 0.8 }}>Gestiona tu información y descubre recomendaciones</p>
        </div>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#39FF14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '1.5rem'
        }}>
          {usuario.nombre?.charAt(0).toUpperCase() || usuario.email.charAt(0).toUpperCase()}
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div>
          <h3 style={{ color: '#39FF14', marginBottom: '1rem' }}>Información Personal</h3>
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Nombre</label>
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre completo"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid #444',
                background: '#1a1a1a',
                color: 'white'
              }}
            />
          </div>
          <p><strong>Correo:</strong> {usuario.email}</p>
          <p><strong>Puntos LevelUp:</strong> <span style={{ color: '#39FF14', fontWeight: 'bold' }}>{usuario.puntos || 100}</span></p>
          <p><strong>Nivel:</strong> {usuario.nivel || 'Bronce'}</p>
          <p><strong>Descuento:</strong> {usuario.descuento || 0}%</p>
          <button
            onClick={guardarPerfil}
            style={{
              marginTop: '1rem',
              padding: '0.8rem 1.5rem',
              background: '#39FF14',
              color: 'black',
              border: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Guardar Cambios
          </button>
        </div>

        <div>
          <h3 style={{ color: '#39FF14', marginBottom: '1rem' }}>Recomendaciones para ti</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem'
          }}>
            {recomendaciones.slice(0, 4).map(p => (
              <div key={p.id} style={{
                border: '1px solid #444',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#1a1a1a'
              }}>
                <div style={{
                  height: '120px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#111'
                }}>
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div style={{ padding: '0.8rem' }}>
                  <h4 style={{
                    margin: '0 0 0.5rem 0',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {p.nombre}
                  </h4>
                  <p style={{
                    color: '#39FF14',
                    fontWeight: 'bold',
                    margin: '0'
                  }}>
                    ${p.precio.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
