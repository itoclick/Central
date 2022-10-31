import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import CompRoutes from './Routes/Routes';

//import ProductsProvider from './context/ProductsProvider';
//import UsersProvider from './context/UsersProvider';
//import SocketsProvider from './context/SocketsProvider';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route index element={<CompRoutes />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
