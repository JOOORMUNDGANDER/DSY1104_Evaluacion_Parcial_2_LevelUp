import React, { useState } from 'react';
import './styles/Carrito.css';

function Carrito() {
  const [items, setItems] = useState([]);

  const agregarAlCarrito = (producto) => {
    const item = items.find(i => i.id === producto.id);
    if (item) {
      setItems(items.map(i => i.id === producto.id ? { ...i, cantidad: i.cantidad + 1 } : i));
    } else {
      setItems([...items, { ...producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

  return (
    <div className="carrito-container">
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.nombre} - ${item.precio} x {item.cantidad}
              <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      <p><strong>Total: ${total}</strong></p>
    </div>
  );
}

export default Carrito;
