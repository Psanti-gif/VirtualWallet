import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation } from "react-router-dom";
import "../styles/perfil.css";
import Menu from "../componentes/menu";
import FijadosT from '../pages/Transacciones'

function Fijados() {

    return(
       <div className="Fijados">
        <FijadosT/>
       </div>
    )

}

export default Fijados;