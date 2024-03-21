import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <h1>Bienvenido a Plantech</h1>
        <p>Somos una empresa dedicada a proporcionar soluciones innovadoras en seguridad. Nuestro sistema de seguridad para puertas inteligentes es líder en el mercado, ofreciendo integración y tecnología de vanguardia para proteger tu hogar o negocio.</p>
        <p>¡Explora nuestras soluciones y descubre cómo podemos hacer tu entorno más seguro!</p>
      </div>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            style={{ width: '25%', height: 'auto' }}
            src="/images/tarjeta.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: '#060606' }}>Primera Imagen</h3>
            <p style={{ color: '#060606' }}>Esta es la descripción de la primera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block mx-auto"
            style={{ width: '25%', height: 'auto' }}
            src="/images/tarjeta.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: '#060606' }}>Segunda Imagen</h3>
            <p style={{ color: '#060606' }}>Esta es la descripción de la segunda imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block mx-auto"
            style={{ width: '25%', height: 'auto' }}
            src="/images/tarjeta.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ color: '#060606' }}>Tercera Imagen</h3>
            <p style={{ color: '#060606' }}>Esta es la descripción de la tercera imagen.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
