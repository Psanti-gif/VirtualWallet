import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation } from "react-router-dom";
import SobreNosotros from "../componentes/Nosotros";
import Menu from "../componentes/menu";
import jairo from '../imagenes/high-rise-buildings-free-photo.jpeg';

function Sobrenosotros() {

    
    const location = useLocation()
    const { setmiLogin } = location.state
    const navigate = useNavigate();
    const [miLogin, setMiLogin] = useState(setmiLogin);
    console.log("Sobrenosotros->",miLogin)
  
    useEffect(() => {
      if (miLogin === "false") {
        console.log("La variable es false");
        navigate("/"); 
      }
    }, [miLogin, navigate]);

    return (
        <div id="us" style={{ backgroundColor: "#F1F0F0" }}>
            <div className='Inicio ' class='body' style={{paddingLeft: '0px'}}>
            <Menu login={{ setmiLogin: miLogin }}/>
            



            </div>
            <div>
                <SobreNosotros />
                
            </div>

        </div>

    );
}

export default Sobrenosotros;