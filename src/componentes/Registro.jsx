import React, {useState} from 'react';  
import '../styles/styles.css';    
import Logo from './logov'
import { Link } from 'react-router-dom';


function Registro(){

  const [miRegistro, setMiRegistro] = useState("false");
  const [nom, setNom] = useState("");
  const [ape, setApe] = useState("");
  const [ema, setEma] = useState("");
  const [tel, setTel] = useState("");
  const [pas, setPas] = useState("");
    return(

        <div class="bg-dark-dark body" >
          <section class="row">
            <div class="col-lg-7 d-none d-lg-block h-100">
              <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item img-1 min-vh-100 active">
                    <div class="carousel-caption d-none d-md-block">
                      <h5 class="font-weidht-bold">First slide label</h5>
                      <a class="tex-muted text-decoration-none">Some representative placeholder content for the first slide.</a>
                    </div>
                  </div>
                  <div class="carousel-item img-2 min-vh-100 ">
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weidht-bold">Second slide label</h5>
                        <a class="tex-muted text-decoration-none">Some representative placeholder content for the second slide.</a>
                      </div>
                  </div>
                  <div class="carousel-item img-3 min-vh-100">
                      <div class="carousel-caption d-none d-md-block">
                        <h5 class="font-weidht-bold">Third slide label</h5>
                        <a class="tex-muted text-decoration-none">Some representative placeholder content for the third slide.</a>
                      </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div class="col-lg-5 d-flex flex-column align-items-end max-vh-100 mb-auto">       
              <div class="px-lg-5 py-lg-4 p-4 pt-0 w-100 ">
                <div class="p-2 w-100 mb-1 div text-center ">
                  <Logo/>
                </div>
                <form class="mb-5 ml-0" action='/home' method='post'>
                  <div class="d-flex justify-content-arounds">
                    <div class="mb-1 w-100">
                      <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Nombre </label>
                      <input type="text" class="form-control bg-dark-x text-light" placeholder='Ingresa tu nombre' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div class="mb-1 w-100">
                      <label for="exampleInputName" class="form-label label font-weight-bold ">Apellido </label>
                      <input type="text" class="form-control bg-dark-x text-light " placeholder='Ingresa tu apellido' id="exampleInputEmail1" aria-describedby="nameHelp"/>
                    </div>
                  </div>
                  <div class="mb-1">
                    <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Email</label>
                    <input type="email" class="form-control bg-dark-x text-light " placeholder='Ingresa tu email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="mb-1">
                    <label for="exampleInputEmail1" class="form-label label font-weight-bold ">Numero de telefono </label>
                    <input type="number" class="form-control text-light bg-dark-x" placeholder='Ingresa tu email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div class="d-flex justify-content-arounds">
                    <div class="mb-1 w-100">
                      <label for="exampleInputPassword1" class="form-label label font-weight-bold ">Contraseña</label>
                      <input type="password" class="form-control bg-dark-x text-light mb-2" placeholder='Ingresa tu contraseña' id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-4 w-100 ">
                      <label for="exampleInputPassword1" class="form-label label font-weight-bold ">Confirmar contraseña</label>
                      <input type="password" class="form-control text-light bg-dark-x  mb-2" placeholder='Ingresa tu contraseña' id="exampleInputPassword1"/>
                    </div>
                  </div>
                    <button type="submit" class="btn btn-primary w-100 form-control altura mb-0">Registrarme</button>
                </form>
                <div class="text-center w-100 mt-0">
                  <p class="d-inline-blockh mb-0 ">¿Ya tienes una cuenta?</p> <Link to="/" class="text-light font-weight-bold">Inicia sesión ahora</Link>
                </div>
              </div>
            </div>
          </section>
        </div>
    );
}

export default Registro;