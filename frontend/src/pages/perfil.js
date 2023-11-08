import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation  } from "react-router-dom";
import Menu from '../componentes/menu'
import Perfil from '../componentes/perfil'

function Perfilp(){
    
  const location = useLocation()
  const { setmiLogin } = location.state
  const navigate = useNavigate();
  const [miLogin, setMiLogin] = useState(setmiLogin);
  console.log("Sobrenosotros->",miLogin)

  useEffect(() => {
    if (miLogin === false) {
      console.log("La variable es false");
      navigate("/"); 
    }
  }, [miLogin, navigate]);
  
    return(
        <div id="Perfil">
            <Menu />   
            <Perfil/>
  
        </div>
    )
}

export default Perfilp;