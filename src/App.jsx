// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductoDetalle from './components/ProductoDetalle';
import NavbarPrincipal from './components/NavbarPrincipal';
import Footer from './components/Footer';
import CarruselInicio from './components/CarruselInicio';
import Home from './pages/Home';
import Catalogo from './pages/Catalogo';
import Ofertas from './pages/Ofertas';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import CarritoPage from './pages/CarritoPage';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Perfil from './pages/Perfil';
import Blog from './pages/Blog';
import Eventos from './pages/Eventos';

import RutaProtegida from './components/RutaProtegida';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavbarPrincipal />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<><CarruselInicio /><Home /></>} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:id" element={<ProductoDetalle />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/carrito" element={
            <RutaProtegida>
              <CarritoPage />
            </RutaProtegida>
          } />
          <Route path="/perfil" element={
            <RutaProtegida>
              <Perfil />
            </RutaProtegida>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
