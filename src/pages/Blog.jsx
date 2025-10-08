import React from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.css';

// Comentario de importación de imágenes locales (elige la que quieras)
// import tipFPS from '../assets/blog/fps-tips.jpg';
// import tendencias from '../assets/blog/tendencias.jpg';
// import salud from '../assets/blog/salud-gamer.jpg';
// import estrategia from '../assets/blog/estrategia.jpg';
// import configSetup from '../assets/blog/configuracion.jpg';

const blogs = [
  {
    id: 1,
    titulo: "Consejos para mejorar en FPS",
    fecha: new Date("2025-09-20").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Aprende a dominar los shooters: sensibilidad óptima, comunicación, ejercicios de puntería y manejo del estrés.",
    imagen: "URL_AQUI_IMAGE_FPS", // tipFPS
    enlace: "https://www.redbull.com/es-es/shooters-consejos-tacticas",
  },
  {
    id: 2,
    titulo: "Nuevas tendencias en gaming 2025",
    fecha: new Date("2025-09-15").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Las tecnologías que están cambiando el rubro: IA, pantallas curvas 4K, periféricos hápticos y realidad aumentada.",
    imagen: "URL_AQUI_IMAGE_TENDENCIAS", // tendencias
    enlace: "https://es.digitaltrends.com/videojuegos/tendencias-videojuegos/",
  },
  {
    id: 3,
    titulo: "Estrategias avanzadas en esports",
    fecha: new Date("2025-09-01").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Cómo los equipos profesionales entrenan la toma de decisiones, el análisis de rivales y la sinergia en juegos de equipo.",
    imagen: "URL_AQUI_IMAGE_ESTRATEGIA", // estrategia
    enlace:
      "https://www.marca.com/esports/actualidad/2024/12/10/estrategias-entrenamiento-esports.html",
  },
  {
    id: 4,
    titulo: "Salud para gamers: visión y pausas activas",
    fecha: new Date("2025-08-20").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Tips médicos para cuidar postura, evitar el síndrome de túnel carpiano y reducir el cansancio visual.",
    imagen: "URL_AQUI_IMAGE_SALUD", // salud
    enlace: "https://www.topdoctors.es/articulos-medicos/10-consejos-de-salud-para-gamers",
  },
  {
    id: 5,
    titulo: "Cómo optimizar tu setup gamer",
    fecha: new Date("2025-08-12").toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    contenido:
      "Guía para iluminación, ergonomía, cable management y recomendaciones de sillas y escritorios ideales.",
    imagen: "URL_AQUI_IMAGE_CONFIGURACION", // configSetup
    enlace: "https://www.xataka.com/seleccion/mejores-escritorios-setups-gaming",
  },
];

function Blog() {
  return (
    <div className="blog-container">
      <h2>Blog Gamer</h2>
      <div className="blog-grid">
        {blogs.map((b) => (
          <BlogCard key={b.id} blog={b} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
