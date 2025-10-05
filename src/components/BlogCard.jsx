// src/components/BlogCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BlogCard.css';

function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="blog-card">
      <h3 className="blog-title">{blog.titulo}</h3>
      <p className="blog-date">{blog.fecha}</p>
      <p className="blog-content">{blog.contenido}</p>
      <button
        className="btn-leer-mas"
        onClick={() => navigate(`/blog/${blog.id}`)}
      >
        Leer más
      </button>
    </div>
  );
}

export default BlogCard;
