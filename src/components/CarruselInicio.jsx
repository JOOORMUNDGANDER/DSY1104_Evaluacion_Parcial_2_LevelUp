import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import "../styles/CarruselInicio.css";

import Banner1 from '../assets/Banner-1-1.png';
import Cougar from '../assets/BANNER-COUGAR1.png';
import MsiGpu from '../assets/msi-gpu.png';
import Razer from '../assets/razer.png';
import Logitec from '../assets/Logitec.png';

function CarruselInicio() {
  return (
    <Carousel>
      {[
        { src: Banner1, alt: '', description: 'Recién llegadas ASUS Prime GeForce RTX 5060', cta: 'Comprar ahora' },
        { src: Cougar, alt: 'BANNER COUGAR', description: 'Las mejores ofertas COUGAR', cta: 'Ver productos' },
        { src: MsiGpu, alt: '', description: '', cta: 'Descubrir' },
        { src: Razer, alt: 'Razer', description: 'Equipos Razer originales', cta: 'Comprar ahora' },
        { src: Logitec, alt: 'Logitec', description: 'Informate de los nuevos equipos', cta: 'Comprar ahora' }
      ].map((item, idx) => (
        <Carousel.Item key={idx}>
          <img className="d-block w-100" src={item.src} alt={item.alt} />
          <Carousel.Caption className="text-start">
            <h3>{item.alt}</h3>
            <p>{item.description}</p>
            <Button variant="success">{item.cta}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarruselInicio;
