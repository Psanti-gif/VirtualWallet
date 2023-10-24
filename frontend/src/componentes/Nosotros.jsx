import React from 'react';
import '../styles/styles1.css';

import Footer from './footer';
import jairo from '../imagenes/high-rise-buildings-free-photo.jpeg'
import torre1 from '../imagenes/torre1.jpg';
import imagen2 from '../imagenes/imagen2.jpg'

function SobreNosotros() {
    return (

        <body style={{ backgroundColor: "#F1F0F0", paddingLeft:"0px" }}>
          
            <div id="carouselExampleInterval" class="carousel slide pt-0 pb-2" style={{padding:"80px"}} data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img src={jairo} style={{ width: "100vw", height:"40vw",display:"flex" , justifyContent:"center"}} alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src={torre1} style={{ width: "100vw", height:"40vw",display:"flex" , justifyContent:"center"}} alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img src={imagen2} style={{ width: "100vw", height:"40vw",display:"flex" , justifyContent:"center"}}alt="..."/>
                    </div>
                </div>
            
                <div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden ">Previous</span>
                </button>
                </div>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            
            <div style={{backgroundColor:"grey"}}>
            <div style={{ textAlign: "center", color: "black", fontSize:"40px", fontFamily:"garamond" }}>Sobre Nosotros</div>
            <div style={{ textAlign: "center", color: "#F1F0F0" , fontSize:"18px", fontFamily:"gotham"}}><br />VirtualWallet es una pequeña empresa. Que busca ser una
                solución amena a algunos de tus problemas financieros <br />
                <br />En VirtualWallet te queremos dar una acondicionamiento adecuado, haciendo uso de interfaces interactivas y logicas para los usuarios <br /> <br />con las cuales tenemos pensado hacer de tu experiencia algo amena y sencilla <br />
                <br />Este es solo un prototipo, nuestro objetivo es expandirnos mucho mas,<br /> <br />tenemos pensado llegar primero a un nivel nacional, para despues globalizarnos,<br /><br /> Y esto sera gracias a tu ayuda y uso adecuado de la aplicación<br />

                <br /><h3>Gracias por tu comprensión</h3><br />
               
                </div>
            </div>
            <br /><Footer></Footer>
        </body>

    );
}

export default SobreNosotros;