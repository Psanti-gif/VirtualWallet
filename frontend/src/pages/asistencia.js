import React, {useState, useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import "../styles/perfil.css";
import Menu from "../componentes/menu";


function Asistencia() {

    
    const navigate = useNavigate();
    const [miLogin, setMiLogin] = useState(false);
  
    useEffect(() => {
      if (miLogin === false) {
        const homeElement = document.getElementById("Asistencia");
        if (homeElement) {
          homeElement.style.display = "none";
        }
        console.log("La variable es false");
        navigate("/"); 
      }
    }, [miLogin, navigate]);


    return(
       <div className="Asistencia">
        <Menu/>
        <h1>Pagina en construcción</h1>
       </div>
    )

}

export default Asistencia;