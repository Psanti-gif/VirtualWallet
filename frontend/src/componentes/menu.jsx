import React,  { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../styles/styles1.css';

function Menu({login}) {
  const navigate = useNavigate();
  const [miLogin, setMiLogin] = useState(login.setmiLogin);
  console.log("menu",miLogin)

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
          <Link class="navbar-brand" to="/home" state={{setmiLogin:login.setmiLogin}}> <b className='la_vi'>V</b>irtual<b className='la_vi'>W</b>allet</Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">

          <li class="nav-item">

           <Link class="nav-link active" aria-current="page" to="/perfil" style={{ color: "white" }} 
           state={{setmiLogin:login.setmiLogin}} >Perfil</Link>
          </li>

          <li class="nav-item">

            <Link class="nav-link active" aria-current="page" to="/asistencia" style={{ color: "white" }} 
            state={{setmiLogin:login.setmiLogin}} >Asistencia</Link>
          </li>

            <li class="nav-item">

              <Link class="nav-link active" aria-current="page" to="/fijados" style={{ color: "white" }}
               state={{setmiLogin:login.setmiLogin}}>Fijados</Link>
            </li>
            <li class="nav-item">

              <Link to="/nosotros"  class="nav-link active" aria-current="page" style={{ color: "white" }} 
              state={{setmiLogin:login.setmiLogin}} >Sobre Nosotros</Link>
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