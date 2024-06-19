import React from 'react';
import logo from '../../images/central.png';
import { Link } from 'react-router-dom'; 
import './login.css';

function login() {

  return (
    <div className="App">
      <main>
        <div id="fundoretangulo">
          <div>
            <img src={logo} alt="logo" id="img"/>
            <h3>Bem vinda(o).</h3>
            <div id="inputs">
              <label htmlFor="nomeDaEntrada">Nome: </label>
              <input id="nomeDaEntrada" type="text" name="nome"/>
              <br/>
              <label htmlFor="nomeDaEntrada">Senha: </label>
              <input id="nomeDaEntrad" type="password" name="pass"/>
              <br/>
              
              <Link to={"/modules"}>
                <button>entrar</button>
              </Link> 
              
            </div>
          </div>
        </div>
        <span>direitos reservados itoclick</span>
      </main>
    </div>
  );
}

export default login;
