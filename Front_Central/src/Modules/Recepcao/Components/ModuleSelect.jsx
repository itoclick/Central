import React from 'react';
import './modulesel.css';
//import { Link } from 'react-router-dom';




const ModulosContratados = () => {
   // fazer um fatch para trazer os modulos da api pois cada usuário tem seus modulos definidos no cadastro.
   const lista = [
      {nome: "ADM", sobre: "Módulo administrativo", imgPath:'adm.png' },
      {nome: "CPAGAR", sobre: "financeiro pagar", imgPath:'pai.png'},
      {nome: "CRECEBER", sobre: "financeiro_receber",imgPath:'receive.png'},
      {nome: "PROD", sobre: "Módulo operacional", imgPath:'prod.png'},
   ];

   return ( 
      <main> 
         <h2 className='cabeca'>Seletor de Módulos</h2>
         <div className='boxies'> 
            { lista.map((module) => 
               <a href={`/${module.nome}`} key={module.nome}  target= { `${module.nome}` } >
                  <div className='cxmodulo'>
                     <img src={`${module.imgPath}`} alt="iconmódule" className='iconModules'/> 
                     <h3>{module.nome}</h3>
                     <h6>{module.sobre}</h6>
                  </div>   
               </a>
               )
            } 
            
         </div>
         
      </main>
   )
};
               
export default ModulosContratados;
