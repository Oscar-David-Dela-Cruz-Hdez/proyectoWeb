import React, { useState } from 'react'
import useAuth from '../../auth/useAuth'
import { Link, useLocation } from 'react-router-dom';
import { Button, Card, Col, Container, FloatingLabel, Form, Image, Row } from 'react-bootstrap';
import routes from '../../helpers/routes';
import { loginRequest } from '../../api/auth';
export default function Login() {
  const { login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    const userCredentials = { email, password };
    try {
      //solicitud del login
      const response = await loginRequest(userCredentials);

      // Obtener datos de respuesta si es necesario
      const responseData = response.data;
      login(responseData, location.state?.from);
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      // Manejar errores según sea necesario
    }
  };

  return (
    <div style={{ minHeight: '100%', maxWidth: '100%' }}>
      <Row className='justify-content-md-center' style={{ minWidth: '100%', minHeight: '100%', maxWidth: '100%' }}>
        <Col md={4} sm={12} style={{ marginTop: window.innerWidth < 576 ? '-250px' : '0px', zIndex: 2, backgroundColor: 'transparent' }}>
          <Container style={{ width: '30rem' }}>
            <h1 className="my-4">Login</h1>
            <Card className='p-4'>
              <Form onSubmit={handleLogin} autoComplete='off'>
                {/* Username input */}
                <FloatingLabel controlId="email" label="Correo Electronico" className="mb-4">
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FloatingLabel>

                {/* Password input */}
                <FloatingLabel controlId="password" label="Contraseña" className="mb-4">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FloatingLabel>

                {/* 2 column grid layout for inline styling */}
                <Row className="mb-4">
                  <Col className="d-flex justify-content-center">
                    {/* Checkbox */}
                    <Form.Check
                      type="checkbox"
                      id="form2Example31"
                      label="Recuérdame"
                      defaultChecked
                    />
                  </Col>
                  <Col>
                    {/* Simple link */}
                    <Link to={routes.home}>¿Olvidó su contraseña?</Link>
                  </Col>
                </Row>

                <div className="d-grid gap-2">
                  {/* Submit button */}
                  <Button type="submit" variant="secondary" className="btn-block mb-4">
                    Iniciar sesión
                  </Button>
                </div>

                {/* Register buttons */}
                <div className="text-center">

                  <p>¿No tiene una cuenta? <Link to={routes.registro}>Regístrate</Link></p>
                
                </div>
              </Form>
            </Card>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

