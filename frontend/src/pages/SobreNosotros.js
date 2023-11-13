import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation } from "react-router-dom";
import SobreNosotros from "../componentes/Nosotros";
import Menu from "../componentes/menu";
import jairo from '../imagenes/high-rise-buildings-free-photo.jpeg';

function Sobrenosotros() {

    return (
        <div id="us" style={{ backgroundColor: "#F1F0F0" }}>
            <div className='Inicio ' class='body' style={{paddingLeft: '0px'}}>
            <Menu/>
            



            </div>
            <div>
                <SobreNosotros />
                
            </div>

        </div>

    );
}

export default Sobrenosotros;