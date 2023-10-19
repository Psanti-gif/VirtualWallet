import React from 'react';
import '../styles/styles.css';

import Footer from './footer';
import jairo from '../imagenes/high-rise-buildings-free-photo.jpeg'
import torre1 from '../imagenes/torre1.jpg';
import imagen2 from '../imagenes/imagen2.jpg'

function SobreNosotros() {
    return (

        <body style={{ backgroundColor: "#F1F0F0", paddingLeft:"9px" }}>
            <div id="carouselExampleInterval" class="carousel slide pt-0 pb-2" style={{padding:"100px"}} data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src={jairo} style={{ width: "100vw", height:"40vw"}} alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src={torre1} style={{ width: "100vw", height:"40vw"}} alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src={imagen2} style={{ width: "100vw", height:"40vw"}}alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div style={{ textAlign: "center", color: "black" }}>Sobre Nosotros</div>
            <div style={{ textAlign: "center", color: "grey" }}><br />VirtualWallet es una pequeña empresa. Que busca ser una
                solución amena a algunos de tus problemas financieros <br />
                <br />En VirtualWallet te queremos dar una acondicionamiento adecuado, haciendo uso de interfaces interactivas y logicas para los usuarios <br />
                <br />Tenemos pensado expandirnos más, con la ayuda de tu uso frecuente en nuestra aplicación <br />
            </div>
            <br /><Footer></Footer>
        </body>

    );
}

export default SobreNosotros;