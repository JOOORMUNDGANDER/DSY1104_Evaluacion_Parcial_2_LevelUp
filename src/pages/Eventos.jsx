// src/pages/Eventos.jsx
import React from 'react';
import '../styles/Eventos.css';

function Eventos() {
  const eventos = [
    {
      id: 1,
      titulo: "Torneo Nacional de League of Legends",
      fecha: "15 de Octubre, 2025",
      ubicacion: "Centro GAM, Santiago",
      imagen: "/assets/images/league-torneo.jpg",
      descripcion: "Participa en el torneo oficial de LoL con premios por $1.500.000. Inscripción gratuita para equipos de 5 jugadores."
    },
    {
      id: 2,
      titulo: "Feria de Juegos Indie 2025",
      fecha: "22 de Octubre, 2025",
      ubicacion: "Parque Bicentenario, Vitacura",
      imagen: "/assets/images/feria-indie.jpg",
      descripcion: "Descubre juegos independientes chilenos, con demostraciones, desarrolladores en vivo y descuentos exclusivos en tiendas."
    },
    {
      id: 3,
      titulo: "Workshop: Diseño de Mods para Minecraft",
      fecha: "5 de Noviembre, 2025",
      ubicacion: "Level-Up Gamer Store, Local 12",
      imagen: "/assets/images/minecraft-workshop.jpg",
      descripcion: "Aprende a crear mods desde cero con Java. Dirigido a jóvenes de 14 a 25 años. Cupos limitados."
    },
    {
      id: 4,
      titulo: "Streamathon: 24 Horas de Juego Solidario",
      fecha: "12 de Noviembre, 2025",
      ubicacion: "Transmisión en Twitch.tv/levelupgamer",
      imagen: "/assets/images/streamathon.jpg",
      descripcion: "24 horas continuas de juego en vivo para recaudar fondos para niños con cáncer. Participan streamers invitados."
    }
  ];

  return (
    <div className="eventos-container">
      <h1>🎮 Eventos Gamers</h1>
      <p>
        Únete a nuestros torneos, ferias y talleres. ¡Diversión, comunidad y premios esperan!
      </p>

      <div className="eventos-grid">
        {eventos.map(evento => (
          <div key={evento.id} className="evento-card">
            <div className="evento-imagen">
              <img src={evento.imagen} alt={evento.titulo} />
            </div>
            <div className="evento-info">
              <h3>{evento.titulo}</h3>
              <p className="evento-fecha">📅 {evento.fecha}</p>
              <p className="evento-ubicacion">📍 {evento.ubicacion}</p>
              <p>{evento.descripcion}</p>
              <div className="evento-botones">
                <button className="btn-asistir">✅ Asistir</button>
                <button className="btn-mas">Más info</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Eventos;
