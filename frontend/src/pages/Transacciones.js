import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation  } from "react-router-dom";
import '../styles/styles1.css';
import Menu from "../componentes/menu";
import Transaccion from "../componentes/transacciones";
import Footert from "../componentes/footert";

function Transacciones() {
  
    
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

    return (
        <div id="transacciones">
            <Menu/>
            <form class="d-flex" role="search" style={{marginTop:"30px", marginLeft:"20px",marginRight:"20px", marginBottom:"30px"}}>
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Transaccion></Transaccion>
            <Footert/>
            

        </div>
    );

}

export default Transacciones;