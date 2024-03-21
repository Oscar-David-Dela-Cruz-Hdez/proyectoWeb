import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../helpers/useFetch';
import Cargando from '../../components/Cargando';
import { Card, Button } from 'react-bootstrap';

export default function Producto() {
  const { id } = useParams();
  const { data: producto, loading } = useFetch(`http://localhost:4000/productos/${id}`);

  if (loading) {
    return <Cargando />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
      <Card style={{ width: '18rem', textAlign: 'center' }}>
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>{producto.descripcion}</Card.Text>
          <Card.Text>Precio: {producto.precio}</Card.Text>
          <Link to="/Productos">
            <Button variant="primary">Regresar</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
