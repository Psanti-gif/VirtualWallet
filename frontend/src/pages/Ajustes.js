import React from "react";
import '../styles/styles1.css';
import Ajuste from "../componentes/Nosotros";
import Menu from "../componentes/menu";
import jairo from "../imagenes/high-rise-buildings-free-photo.jpeg"

function Ajustes() {
    return (
        <div style={{backgroundColor:"#F1F0F0"}}>
            <div className='Inicio ' class='body'>
                <Menu />
                <img src={jairo} alt="imagen" style={{ width: "100vw", height: "40vw" }}></img>

                <h1 class="card text-center"></h1>



            </div>
            <div>
                <Ajuste />
            </div>
        </div>



    );

}

export default Ajustes;