import React from 'react';
import BlogCard from '../components/BlogCard';

const blogs = [
  {
    id: 1,
    titulo: "Consejos para mejorar en FPS",
    fecha: "2025-09-20",
    contenido: "Aprende a dominar los juegos de disparos en primera persona con estos trucos profesionales."
  },
  {
    id: 2,
    titulo: "Nuevas tendencias en gaming 2025",
    fecha: "2025-09-15",
    contenido: "Descubre las tecnologías que están revolucionando el mundo gamer."
  }
];

function Blog() {
  return (
    <div className="blog-container" style={{ padding: '2rem' }}>
      <h2>Blog Gamer</h2>
      <div className="blog-grid" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {blogs.map(b => <BlogCard key={b.id} blog={b} />)}
      </div>
    </div>
  );
}
export default Blog;
