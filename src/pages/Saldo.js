import React from 'react';
import Menu from '../componentes/menu';
import Saldoimg from '../imagenes/cashless_technology_icon_194028.png';
import Bancos from '../imagenes/cashless_society_icon_194027.png';
import Transacciones from '../imagenes/cashless_icon_194058.png';
import bancoAv from '../imagenes/BancoAV.jpg';
import bancoP from '../imagenes/Bancop.png';
import imagen2 from '../imagenes/imagen2.jpg';
import bancolombia from '../imagenes/bancolombia.jpg';
import Footer from '../componentes/footer';

function Saldo() {
    return (
        <div><Menu />
            <div id="carouselExampleIndicators" class="carousel slide" >
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Saldoimg} alt="imagen" style={{ width: "50vw", height: "25vw", position:"relative",alignItems:"center" }}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={Bancos} alt="imagen" style={{ width: "50vw", height: "25vw", margin:"auto" }}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={Transacciones} alt="imagen" style={{ width: "50vw", height: "25vw", margin:"auto"}}></img>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div style={{ display: "block", marginTop: "60px", width:"50vh", margin:"0 auto"}}>
                <div class="card text-center" style={{ backgroundColor: "#5D4F73" }}>
                    <div class="container">
                        <div class="row " style={{ display: "flex" }}>
                            <div style={{ marginTop: "20px", alignItems:"center"}}>
                                    <p style={{textAlign:"center", color:"white"}}>TU SALDO</p>
      
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "block", padding: "20px", marginTop: "20px" }}><div className="Footer">
                <div class="card text-center" style={{ backgroundColor: "black" }}>
                    <div class="card-header" style={{ color: "white" }}>
                        Saldo
                        <div class="container">
                            <div class="row " style={{ display: "flex" }}>
                                <div class="col-6 col-lg-4 col-md-4" style={{ marginTop: "20px" }}>
                                    <div class="card" style={{}}>
                                    <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bancoP} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-6 col-lg-4 col-md-4" style={{ marginTop: "20px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                    <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bancoAv} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-4" style={{ marginTop: "20px", marginBottom: "10px" }}>
                                    <div class="card" style={{ width: "20vh;" }}>
                                    <button type="submit" class="btn btn-outline-light bg-dark-x flex-grow-1 mr-2"><img src={bancolombia} class="card-img-top" alt="..." /></button>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
            <Footer></Footer>
        </div>



    );

}

export default Saldo;