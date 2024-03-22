import React from 'react';

export default function Preguntas() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Preguntas Frecuentes</h1>
      <div style={styles.questionsWrapper}>
        <div style={styles.questionContainer}>
          <h2 style={styles.question}>¿Cuáles son los mejores dispositivos de seguridad para mi hogar?</h2>
          <p style={styles.answer}>Los mejores dispositivos de seguridad dependen de tus necesidades específicas y del diseño de tu hogar. Recomendamos una combinación de cámaras de seguridad, sensores de movimiento, cerraduras inteligentes y sistemas de alarma para una protección completa.</p>
        </div>
        <div style={styles.questionContainer}>
          <h2 style={styles.question}>¿Qué tipo de cerraduras inteligentes son compatibles con mi puerta?</h2>
          <p style={styles.answer}>Ofrecemos una variedad de cerraduras inteligentes que son compatibles con la mayoría de las puertas estándar. Nuestro equipo de soporte técnico puede ayudarte a determinar cuál es la mejor opción para tu hogar.</p>
        </div>
        <div style={styles.questionContainer}>
          <h2 style={styles.question}>¿Cómo puedo monitorear mi sistema de seguridad desde mi teléfono móvil?</h2>
          <p style={styles.answer}>Nuestros sistemas de seguridad vienen con aplicaciones móviles intuitivas que te permiten monitorear y controlar tu sistema desde cualquier lugar. Simplemente descarga la aplicación en tu dispositivo móvil y sigue las instrucciones para configurar tu cuenta.</p>
        </div>
        <div style={styles.questionContainer}>
          <h2 style={styles.question}>¿Qué medidas de seguridad adicionales puedo tomar para proteger mi hogar?</h2>
          <p style={styles.answer}>Además de nuestros dispositivos de seguridad, te recomendamos medidas simples como mantener cerradas las puertas y ventanas, instalar iluminación exterior, y mantener el área alrededor de tu casa despejada y visible.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  },
  questionsWrapper: {
    display: 'grid',
    gridGap: '30px',
  },
  questionContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  question: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  answer: {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#555',
  },
};
