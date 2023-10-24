import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Inicio';
import Login from '../pages/Login';
import Registro from '../pages/registro';

import Perfil from '../componentes/perfil'
import Spadis from '../pages/spadis'
import Us from '../pages/us'
import Asistencia from '../pages/asistencia'

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
        
        <Route exact path='/registro' element={<Registro/>}/>
        
        <Route exact path='/perfil'element={<Perfil/>}/>
        <Route exact path='//espacios-disponibles' element={<Spadis/>}/>
        <Route exact path='/us'element={<Us/>}/>
        <Route exact path='/asistencia'element={<Asistencia/>}/>

    </Routes>
   </Router>
  );
}

export default App;
