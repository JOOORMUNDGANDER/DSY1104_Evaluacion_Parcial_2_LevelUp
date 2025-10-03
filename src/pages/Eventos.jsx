import React from 'react';

function Eventos() {
  const eventos = [
    { id: 1, nombre: "LAN Party Santiago", ciudad: "Santiago", puntos: 200 },
    { id: 2, nombre: "Torneo Dota 2 Concepción", ciudad: "Concepción", puntos: 250 },
    { id: 3, nombre: "Festival de Cosplay Valparaíso", ciudad: "Valparaíso", puntos: 150 },
  ];

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Eventos Gamer Nacionales</h2>
      <p>Asiste a eventos y gana puntos LevelUp para canjear por descuentos</p>
      
      <div style={{ 
        width: '100%', 
        height: '400px', 
        background: 'url(/mapa-chile.jpg) no-repeat center', 
        backgroundSize: 'cover', 
        border: '2px solid var(--acento-azul)', 
        borderRadius: '10px',
        margin: '2rem 0'
      }}>
        {/* Aquí puedes integrar Leaflet o Google Maps */}
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {eventos.map(e => (
          <li key={e.id} style={{ margin: '1rem 0', padding: '1rem', background: '#111', borderRadius: '8px' }}>
            <h3>{e.nombre}</h3>
            <p>{e.ciudad} | Gana {e.puntos} puntos LevelUp</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Eventos;
