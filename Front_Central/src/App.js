import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import LOGIN from './Modules/Recepcao/LOGIN';
import ADM from './Modules/ADM/Pages/ADM'
import PRODUCAO from './Modules/Production/Pages/PRODUCAO';
import PAGAR from './Modules/Finance/Pages/PAGAR';
import RECEBER from './Modules/Finance/Pages/RECEBER';
import ModulosContratados from './Modules/Recepcao/Components/ModuleSelect';
import Notefound from './Notefound';

//import ProductsProvider from './context/ProductsProvider';
//import UsersProvider from './context/UsersProvider';
//import SocketsProvider from './context/SocketsProvider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={ <LOGIN /> } />
       <Route path="/modules" element={ <ModulosContratados /> } />
       <Route path='/ADM' element={ <ADM /> }/>
       <Route path='/PROD' element={ <PRODUCAO /> }/>
       <Route path='/CPAGAR' element={ <PAGAR/> }/>
        <Route path='/CRECEBER' element={<RECEBER/>}/>
       <Route path="*" element={<Notefound />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
