// src/pages/Blog.jsx
import React from 'react';
import BlogCard from '../components/BlogCard';
import '../styles/Blog.css';

const blogs = [
  {
    id: 1,
    titulo: "Consejos para mejorar en FPS",
    fecha: "2025-09-20",
    contenido: "Aprende a dominar los juegos de disparos en primera persona con estos trucos profesionales: control de retroceso, gestión de mapas y configuración de DPI."
  },
  {
    id: 2,
    titulo: "Nuevas tendencias en gaming 2025",
    fecha: "2025-09-15",
    contenido: "Descubre las tecnologías que están revolucionando el mundo gamer: IA en NPCs, pantallas curvas 4K y periféricos con retroalimentación háptica avanzada."
  }
];

function Blog() {
  return (
    <div className="blog-container">
      <h2>Blog Gamer</h2>
      <div className="blog-grid">
        {blogs.map(b => (
          <BlogCard 
            key={b.id} 
            blog={{
              ...b,
              fecha: new Date(b.fecha).toLocaleDateString('es-ES', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
              })
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
