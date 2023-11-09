import React, {
  useState,
  useEffect
} from "react";
import {
  useNavigate,
  useLocation
} from "react-router-dom";
import "../styles/perfil.css";
import Menu from "../componentes/menu";

function Asistencia() {

  return (
    <div className="Asistencia">
      <Menu login={{ setmiLogin: miLogin }} />
      <h1>Pagina en construcción</h1>
    </div>
  );
}

export default Asistencia;