import React from 'react';
import Menu from '../componentes/menu'
import jairo from '../imagenes/high-rise-buildings-free-photo.jpeg';
import Footer from '../componentes/footer'
import Productos from '../componentes/productos';

function Inicio() {
    return (
        <div className='Inicio ' class='body'>
            <Menu />
            <img src={jairo} alt="imagen" style={{ width: "100vw", height:"50vw"}}></img>
          
            <h1 class="card text-center"></h1>
            
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        
                    </div>
                    <div class="carousel-item">
                        
                    </div>
                    <div class="carousel-item">
                        
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Productos />
            
        </div>


    );
}

export default Inicio;