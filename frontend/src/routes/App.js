import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Saldo from '../pages/Saldo';
import Ajustes from '../pages/Ajustes';
import SobreNosotros from '../pages/SobreNosotros';
import Transacciones from '../pages/Transacciones';
import Cuentas_vinculadas from '../pages/Cuentas_vinculadas';
import Mensajes from '../pages/Mensajes';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Inicio/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/saldo' element={<Saldo/>}/>
      <Route exact path='/nosotros' element={<SobreNosotros/>}/>
      <Route exact path='/transacciones' element={<Transacciones/>}/>
      <Route exact path='/cuentas' element={<Cuentas_vinculadas/>}/>
      <Route exact path='/mensajes' element={<Mensajes/>}/>

    </Routes>
   </Router>
  );
}

export default App;
