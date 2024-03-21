import React from 'react'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';
export default function Navigation() {
    const { isLogged, logout,hasRole } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' style={{ backgroundColor: '#44acf7' }}>
            <Image src='/images/logo.png' width={'6%'}/>
            <Navbar.Brand as={NavLink} to={routes.home} style={{ color: '#060606', fontSize:'30px' }}  className='ms-5'>
            𝗣𝗹𝗮𝗻𝘁𝗲𝗰𝗵
            </Navbar.Brand>
            
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className="mx-auto " variant='underline'>
                    <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.catalogo}>Sistem Port</Nav.Link>
                    
                    
                    {
                        
                        hasRole('admin')?(
                            <>
                                <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.iotA}>IOT</Nav.Link>
                                <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.usuariosA}>Usuarios</Nav.Link>
                                <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.administradoresA}>Administradores</Nav.Link>
                            </>
                    
                        ):hasRole('usuario')?(
                            <>
                                <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.iotU+routes.iotDashboardU}>IoT</Nav.Link>
                            </>
                        ):(<></>)
                    }
                    
                </Nav>
                <Nav className='me-4' variant='underline'>
                    {isLogged() ? (<>
                        <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.perfil}>
                            MI PERFIL
                        </Nav.Link>
                        <Nav.Link style={{ color: '#060606' }} onClick={() => logout()}>
                            CERRAR SESIÓN
                        </Nav.Link>
                    </>
                    ) : (
                        <>
                            <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.login}>
                                LOGIN
                            </Nav.Link>
                            <Nav.Link style={{ color: '#060606' }} as={NavLink} to={routes.registro}>
                                REGISTRO
                            </Nav.Link>
                        </>
                    )}
                </Nav>


            </Navbar.Collapse>
        </Navbar>
    )
}
