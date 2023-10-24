import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/styles1.css';

function Menu() {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    // Aquí puedes agregar la lógica para cerrar sesión, como eliminar el token de autenticación, etc.

    localStorage.removeItem('token');
    // Después de cerrar sesión, redirige al usuario a la página de inicio o a la página de inicio de sesión.
    navigate('/'); // Cambia la URL de destino según tu enrutamiento
  };


  return (
    <nav class="navbar navbar-expand-lg bg-dark" >
      <div class="container-fluid ">
        <div class="text-center">
          <a class="navbar-brand" href="/home"> <b className='la_vi'>V</b>irtual<b className='la_vi'>W</b>allet</a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">

              <a class="nav-link active" aria-current="page" href="/mensajes" style={{ color: "white" }} >Mensajes</a>
            </li>
            <li class="nav-item">

              <a class="nav-link active" aria-current="page" href="/nosotros" style={{ color: "white" }} >Sobre Nosotros</a>
            </li>
            <li class="nav-item">

              <a class="nav-link active" aria-current="page" href="#" style={{ color: "white" }} >Ajustes</a>
            </li>
            <li class="nav-item">

            <Nav.Link className='text-light' onClick={handleCerrarSesion}>
            Cerrar Sesión
          </Nav.Link>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Menu;