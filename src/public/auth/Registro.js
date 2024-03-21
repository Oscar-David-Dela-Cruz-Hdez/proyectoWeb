import React, { useState } from 'react';
import { Form, Button, Card, FloatingLabel, Alert, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import routes from '../../helpers/routes';
import useFetch from '../../helpers/useFetch';
import { useForm } from 'react-hook-form';
import useAuth from '../../auth/useAuth';
const Registro = () => {
  const [datos, setDatos] = useState('Personales', { required: true });
  const { data, loading } = useFetch('http://localhost:4000/questions', { required: true })

  const { register, handleSubmit, formState: { errors } } = useForm()
  const { signup, user } = useAuth()
  const changeDatos = (newDatos) => {
    setDatos(newDatos);
  };
  console.log(user)
  const onSubmit = handleSubmit(async (values) => {
    console.log(values)
    signup(values)
  })
  return (
    <Container style={{ width: '30rem' }} className='mb-4'>
      <h1 className="my-4">Registro</h1>
      <Card>
        <Nav fill variant="tabs" defaultActiveKey={'Personales'}>
          <Nav.Item>
            <Nav.Link eventKey={'Personales'}
              onClick={() => changeDatos('Personales', { required: true })}>
              Datos Personales
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={'Cuenta'}
              onClick={() => changeDatos('Cuenta', { required: true })}
            >
              Datos de la Cuenta
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Container className="card-body">
          <Form autoComplete='off'
            onSubmit={onSubmit}>
            {datos === 'Personales' && (
              <>
                <Container className="mb-3">
                  <FloatingLabel controlId="name" label="Nombre">
                    <Form.Control type="text" placeholder="Ingrese su nombre" {...register('nombre.nombre', { required: true })} />
                  </FloatingLabel>
                  {errors?.nombre?.nombre?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className="mb-3">
                  <FloatingLabel controlId="apP" label="Apellido paterno">
                    <Form.Control type="text" placeholder="Ingrese su apellido paterno"  {...register('nombre.apP', { required: true })} />
                  </FloatingLabel>
                  {errors?.nombre?.apP?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className="mb-3">
                  <FloatingLabel controlId="apM" label="Apellido Materno">
                    <Form.Control type="text" placeholder="Ingrese su apellido Materno"  {...register('nombre.apM', { required: true })} />
                  </FloatingLabel>
                  {errors?.nombre?.apM?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className="mb-3">
                  <FloatingLabel controlId="tel" label="Teléfono">
                    <Form.Control type="number" placeholder="Ingrese su teléfono"  {...register('telefono', { required: true })} />
                  </FloatingLabel>
                  {
                    errors.telefono && (<Alert variant='danger'>El campo es requerido</Alert>)
                  }
                </Container>
                <Button variant='outline-primary' className=" me-2" onClick={() => changeDatos('Cuenta', { required: true })}>
                  Siguiente
                </Button>
              </>
            )}

            {datos === 'Cuenta' && (
              <>
                <Container className="mb-3">
                  <FloatingLabel controlId="email" label="E-mail">
                    <Form.Control type="email" placeholder="Ingrese su e-mail"  {...register('datosCuenta.email', { required: true })} />
                  </FloatingLabel>
                  {errors?.datosCuenta?.email?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className='mb-3'>
                  <FloatingLabel controlId="password" label="Password">
                    <Form.Control type="password" placeholder="Ingrese su password"  {...register('datosCuenta.password', { required: true })} />
                  </FloatingLabel>
                  {errors?.datosCuenta?.password?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className='mb-3'>
                  <FloatingLabel controlId="repPass" label="Repetir password">
                    <Form.Control type="password" placeholder="Repita su password"  {...register('repPass', { required: true })} />
                  </FloatingLabel>
                  {errors?.repPass?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className='mb-3'>
                  <Form.Label >Pregunta Secreta</Form.Label>
                  <Form.Select  {...register('datosCuenta.preguntaRecuperacion.idPregunta', { required: true })}>
                    <option value={''}>Elija su pregunta secreta...</option>
                    {loading ? (<></>) : (
                      data.map(pregunta => (
                        <option key={pregunta._id} value={pregunta._id}>{pregunta.pregunta}</option>
                      ))
                    )}
                  </Form.Select>
                  {errors?.datosCuenta?.preguntaRecuperacion?.idPregunta?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Container className="mb-3">
                  <FloatingLabel controlId="respuesta" label="Respuesta">
                    <Form.Control type="text" placeholder="Ingrese su respuesta"  {...register('datosCuenta.preguntaRecuperacion.respuesta', { required: true })} />
                  </FloatingLabel>
                  {errors?.datosCuenta?.preguntaRecuperacion?.respuesta?.type === 'required' && (
                    <Alert variant='danger'>El campo es requerido</Alert>
                  )}
                </Container>
                <Button variant='outline-primary' className=" me-2" onClick={() => changeDatos('Personales', { required: true })}>
                  Regresar
                </Button>
              </>
            )}



            <Button type='submit' variant='primary'>Registrarse</Button>
          </Form>
          <div className="text-center mt-3">
            <p>
              ¿Ya tiene una cuenta? <Link to={routes.login} >Inicie sesión aquí</Link>
            </p>
          </div>
        </Container>
      </Card>
    </Container>
  );
};

export default Registro;
