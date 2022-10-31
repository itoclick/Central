import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Modules/Login';
//import Adm from './Modules/Pages/Adm';
//import Gerenciamento from './Modules/Pages/Gerenciamento';
//import Orders from './Modules/Pages/Orders';
//import Produtos from './Modules/Pages/Produtos';
//import Registro from './Modules/Pages/registro';
//import OrderDetails from './Modules/Pages/OrderDetails';

const comp_Routes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
   
    <Route path="/login" element={ <Login /> } />
   
  </Routes>
);

export default comp_Routes;
