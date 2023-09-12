import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Saldo from '../pages/Saldo';
import Ajustes from '../pages/Ajustes';
import SobreNosotros from '../pages/SobreNosotros';

function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Inicio/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/saldo' element={<Saldo/>}/>
      <Route exact path='/nosotros' element={<SobreNosotros/>}/>
    </Routes>
   </Router>
  );
}

export default App;
