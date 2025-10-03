// src/components/BlogCard.jsx
import React from 'react';
import '../styles/BlogCard.css';

function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <h3 className="blog-title">{blog.titulo}</h3>
      <p className="blog-date">{blog.fecha}</p>
      <p className="blog-content">{blog.contenido}</p>
      <button className="btn-leer-mas">Leer más</button>
    </div>
  );
}

export default BlogCard;
