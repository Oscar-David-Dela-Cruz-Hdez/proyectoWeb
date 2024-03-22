import React from 'react';
import imagenSomos from '../../public/pages/imagenes/logo.png'; // Ruta de la imagen para "Somos"
import imagenHacemos from '../../public/pages/imagenes/red.jpg'; // Ruta de la imagen para "Hacemos"
import imagenVision from '../../public/pages/imagenes/lol.png';
import imagenMision from '../../public/pages/imagenes/puerta-de-seguridad.jpg';

export default function QuienesSomos() {
  const styles = {
    quienesSomos: {
      maxWidth: '800px',
      margin: 'auto',
      textAlign: 'center',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      backgroundColor: '#ffffff',
    },
    article: {
      marginBottom: '30px',
      padding: '30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '5px',
      backgroundColor: '#f3f3f3',
    },
    h2: {
      color: '#333',
      marginBottom: '10px',
    },
    h3: {
      color: '#555',
      marginBottom: '5px',
    },
    p: {
      color: '#777',
      lineHeight: '1.5',
    },
    image: {
      width: '100%',
      height: 'auto',
      borderRadius: '5px',
      boxShadow: '0 0 20px rgba(0, 0, 0, .2)', // Este estilo crea un efecto de sombra desvanecida alrededor de la imagen
    },
  };

  return (
    <section style={styles.quienesSomos}>
      <header>
      <h2 style={{...styles.h2, color: '#060606'}}>Acerca de Plantech</h2>
      </header>
      <article style={styles.article}>
        <h3 style={{...styles.h3, color: '#060606'}}>Somos</h3>
        <img src={imagenSomos} alt="Somos" style={styles.image} />
        <p style={{...styles.p, color: '#060606'}}>La empresa de tecnología en comercio electrónico y soluciones de seguridad. Nuestro propósito es garantizar la seguridad de los hogares y los negocios para transformar la vida de miles de personas en la región.</p>
      </article>
      <article style={styles.article}>
        <h3 style={{...styles.h3, color: '#060606'}}>Hacemos</h3>
        <img src={imagenHacemos} alt="Hacemos" style={styles.image} />
        <p style={{...styles.p, color: '#060606'}}>Desarrollamos productos tecnológicos que permiten a millones de usuarios garantizar una mejor seguridad para su hogar y negocio de forma fácil, segura y eficiente.</p>
      </article>
      <article style={styles.article}>
        <h3 style={{...styles.h3, color: '#060606'}}>Misión</h3>
        <img src={imagenMision} alt="Hacemos" style={styles.image} />
        <p style={{...styles.p, color: '#060606'}}>Garantizar la seguridad con nuestros productos para transformar la vida de millones de personas en la región.</p>
      </article>
      <article style={styles.article}>
        <h3 style={{...styles.h3, color: '#060606'}}>Visión</h3>
        <img src={imagenVision} alt="Hacemos" style={styles.image} />
        <p style={{...styles.p, color: '#060606'}}>Expandir la venta de nuestros productos en todos los estados limítrofes.</p>
      </article>
    </section>
  );
}