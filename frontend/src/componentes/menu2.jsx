import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/styles.css';

function Menu() {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token de autenticación, etc.

    localStorage.removeItem('token');
    // Después de cerrar sesión, redirige al usuario a la página de inicio o a la página de inicio de sesión.
    navigate('/'); // Cambia la URL de destino según tu enrutamiento
  };

  return (
    <Navbar className='bg-dark-dark' expand="lg">
      <Navbar.Brand className='text-light' as={Link} to="/home">
        VirtualWallet
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className='text-light' as={Link} to="/perfil">
            Perfil
          </Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/espacios-disponibles">
            Espacios Disponibles
          </Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/us">
            Acerca de Nosotros
          </Nav.Link>
          <Nav.Link as={Link} className='text-light' to="/asistencia">
            Asistencia
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className='text-light' onClick={handleCerrarSesion}>
            Cerrar Sesión
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;
