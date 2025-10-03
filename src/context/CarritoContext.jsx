// src/contexto/CarritoContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CarritoContext = createContext();

const carritoInicial = {
  items: [],
  total: 0,
  cantidad: 0
};

// Reducer para manejar las acciones del carrito
const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'AGREGAR_PRODUCTO':
      const productoExistente = state.items.find(item => item.id === action.producto.id);
      let nuevosItems;

      if (productoExistente) {
        nuevosItems = state.items.map(item =>
          item.id === action.producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        nuevosItems = [...state.items, { ...action.producto, cantidad: 1 }];
      }

      const nuevaCantidad = nuevosItems.reduce((acc, item) => acc + item.cantidad, 0);
      const nuevoTotal = nuevosItems.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

      return { ...state, items: nuevosItems, cantidad: nuevaCantidad, total: nuevoTotal };

    case 'ELIMINAR_PRODUCTO':
      const item = state.items.find(item => item.id === action.id);
      const nuevosItemsSinItem = state.items.filter(item => item.id !== action.id);
      const nuevaCantidadSinItem = state.cantidad - item.cantidad;
      const nuevoTotalSinItem = state.total - (item.precio * item.cantidad);

      return { ...state, items: nuevosItemsSinItem, cantidad: nuevaCantidadSinItem, total: nuevoTotalSinItem };

    case 'VACIAR_CARRITO':
      return { items: [], total: 0, cantidad: 0 };

    case 'ACTUALIZAR_CANTIDAD':
      const itemsActualizados = state.items.map(item =>
        item.id === action.id
          ? { ...item, cantidad: action.cantidad }
          : item
      );
      const nuevaCantidadTotal = itemsActualizados.reduce((acc, item) => acc + item.cantidad, 0);
      const nuevoTotalGeneral = itemsActualizados.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);

      return { ...state, items: itemsActualizados, cantidad: nuevaCantidadTotal, total: nuevoTotalGeneral };

    case 'CARGAR_DEL_STORAGE':
      return action.carrito;

    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInicial);

  // Cargar carrito desde localStorage al iniciar
  useEffect(() => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      dispatch({ type: 'CARGAR_DEL_STORAGE', carrito: JSON.parse(carritoGuardado) });
    }
  }, []);

  // Guardar carrito en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(state));
  }, [state]);

  return (
    <CarritoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  }
  return context;
};
