import React from 'react';
import Menu from '../componentes/menu';
import Saldoimg from '../imagenes/cashless_technology_icon_194028.png';
import Bancos from '../imagenes/cashless_society_icon_194027.png';
import Transacciones from '../imagenes/cashless_icon_194058.png';

function Saldo() {
    return (
        <div><Menu />
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Saldoimg} alt="imagen" style={{ width: "50vw", height:"25vw"}}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={Bancos} alt="imagen" style={{ width: "50vw", height:"25vw"}}></img>
                    </div>
                    <div class="carousel-item">
                        <img src={Transacciones} alt="imagen" style={{ width: "50vw", height:"25vw"}}></img>
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
        </div>



    );

}

export default Saldo;