import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Inicio';
import Login from '../pages/Login';
import Registro from '../pages/registro';
import Saldo from '../pages/saldo';
import Perfil from '../componentes/perfil'

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/registro' element={<Registro/>}/>
        <Route exact path='/saldo'element={<Saldo/>}/>
        <Route exact path='/perfil'element={<Perfil/>}/>
    </Routes>
   </Router>
  );
}

export default App;
