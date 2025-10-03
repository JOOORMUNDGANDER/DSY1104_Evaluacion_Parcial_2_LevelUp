import React from 'react';
function BlogCard({ blog }) {
  return (
    <div style={{ background: '#111', padding: '1rem', borderRadius: '10px', border: '1px solid var(--acento-azul)' }}>
      <h3>{blog.titulo}</h3>
      <p style={{ color: '#D3D3D3' }}>{blog.fecha}</p>
      <p>{blog.contenido}</p>
      <button className="btn">Leer más</button>
    </div>
  );
}
export default BlogCard;
