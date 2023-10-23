import React from 'react';
import '../styles/styles.css';


function Menu() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark" >
      <div class="container-fluid ">
        <div class="text-center">
          <a class="navbar-brand" href="/"> <b className='la_v'>V</b>irtual<b className='la_v'>W</b>allet</a>
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

              <a class="nav-link active" aria-current="page" href="#" style={{ color: "white" }} >Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </div>

    </nav>
  );
}

export default Menu;