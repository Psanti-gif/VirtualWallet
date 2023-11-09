import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation } from "react-router-dom";
import "../styles/perfil.css";
import Menu from "../componentes/menu";


function Fijados() {
  const location = useLocation()
  const { setmiLogin } = location.state
  const navigate = useNavigate();
  const [miLogin, setMiLogin] = useState(setmiLogin);
  console.log("Fijados->",miLogin)


  useEffect(() => {
    if (miLogin === "false") {
      console.log("La variable es false");
      navigate("/"); 
    }
  }, [miLogin, navigate]);
  
    return(
       <div className="Fijados">
        <Menu login={{ setmiLogin: miLogin }}/>
        <h1>Pagina en construcción</h1>
       </div>
    )

}

export default Fijados;