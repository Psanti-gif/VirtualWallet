import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation  } from "react-router-dom";
import Menu from '../componentes/menu'
import PerfilP from '../componentes/perfil'

function Perfil(){
  
    return(
        <div id="Perfil">
            <Menu/>
            <PerfilP/>
  
        </div>
    )
}

export default Perfil;