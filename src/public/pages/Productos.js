// En Productos.js
import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../helpers/useFetch';
import { Button, Card,Col, Container, Row } from 'react-bootstrap';
import Cargando from '../../components/Cargando';

export default function Productos() {
  const { data, loading } = useFetch('http://localhost:4000/productos');

  return (
    <div>
      <Container>
        <h1>Sistem Security</h1>
        <Row sm={2} md={3} lg={4}>
          {loading ? (
            <Cargando />
          ) : (
            data.map(producto => (
              <Col key={producto._id}>
                <Card style={{ maxWidth: 280 }}>
                  <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} style={{ width: '100%', height: 250 }} />
                  <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>{producto.precio}</Card.Text>
                    {/* Paso el ID del producto como parte de la URL */}
                    <Link to={`/products/${producto._id}`}> {/* Cambiado a la nueva ruta */}
                      <Button variant="primary">Ver detalles</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
}
