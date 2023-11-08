import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Saldo from '../pages/Saldo';
import SobreNosotros from '../pages/SobreNosotros';
import Transacciones from '../pages/Transacciones';
import Cuentas_vinculadas from '../pages/Cuentas_vinculadas';
import Registro from '../pages/registro'
import Asistencia from '../pages/asistencia';
import TyC from '../pages/tyc'
import Fijados from '../pages/fijados'
import Perfil from '../componentes/perfil';
function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/home' element={<Inicio/>}/>
      <Route exact path='/perfil'element={<Perfil/>}/>
      <Route exact path='/registro' element={<Registro/>}/>
      <Route exact path='/fijados' element={<Fijados/>}/>  
      <Route exact path='/saldo' element={<Saldo/>}/>
      <Route exact path='/nosotros' element={<SobreNosotros/>}/>
      <Route exact path='/transacciones' element={<Transacciones/>}/>
      <Route exact path='/cuentas' element={<Cuentas_vinculadas/>}/>
      <Route exact path='/asistencia'element={<Asistencia/>}/>
      <Route exact path='/tyc'element={<TyC/>}/>

    </Routes>
   </Router>
  );
}

export default App;
