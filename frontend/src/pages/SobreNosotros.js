import React, {useState, useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import SobreNosotros from "../componentes/Nosotros";
import Menu from "../componentes/menu";
import jairo from '../imagenes/high-rise-buildings-free-photo.jpeg';

function Sobrenosotros() {

    
    
    const navigate = useNavigate();
    const [miLogin, setMiLogin] = useState(false);
  
    useEffect(() => {
      if (miLogin === false) {
        const homeElement = document.getElementById("us");
        if (homeElement) {
          homeElement.style.display = "none";
        }
        console.log("La variable es false");
        navigate("/"); 
      }
    }, [miLogin, navigate]);

    return (
        <div id="us" style={{ backgroundColor: "#F1F0F0" }}>
            <div className='Inicio ' class='body' style={{paddingLeft: '0px'}}>
                <Menu />
            



            </div>
            <div>
                <SobreNosotros />
                
            </div>

        </div>

    );
}

export default Sobrenosotros;