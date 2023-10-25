import React from "react";
import "../styles/perfil.css";
import Menu from "../componentes/menu";
import { Link } from "react-router-dom";


function TyC() {
    return(
       <div className="TyC">
            <div class="">
            <h1>Pagina en construcción</h1>
            </div>
            <Link to ="/">ir a inisiar sesión</Link> <br/>
            <Link to ="/registro">ir a formulario de registro</Link>
       </div>
    )

}

export default TyC;