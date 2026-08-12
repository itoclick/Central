import React, {useState} from 'react';
import logo from '../../images/central.png';
import { Link } from 'react-router-dom'; 
import './login.css';


function Login() {
  const [pass, setPass] = useState('');
  const [user, setUser] = useState('');
  const [loged, setLoged] = useState(false);
  

  const consulta =  (user,pass)=>{
      fetch(
        'http://localhost:3001/login', 
        {
          method: 'GET',
          headers: {'Content-Type': 'application/json'  },
          body: JSON.stringify({
                                  "nome": user,
                                  "password": pass
                                })
        }
      ).then(
          resposta => {
            console.log('resposta do fetch',resposta);
          if (resposta.body) {
          console.log(JSON.stringify(resposta.body));  
          //aqui vai retornar os modulos que o usuario tem acesso, e vai ser armazenado em um state para ser usado na tela de modulos 
          return resposta;
          } else {
                    console.log('Usuario ou senha incorretos!');
                    return Promise.reject(new Error('Usuario ou senha incorretos!'));
            }
  })
  .catch(erro => console.log('Erro de validação:', erro));
  };
  

  return (
    <div className="App">
      <main>
        <div id="fundoretangulo">
          <div>
            <img src={logo} alt="logo" id="img"/>
            <h3>Bem vindo(a).</h3>
            <div id="inputs">
              <label htmlFor="nomeDaEntrada">Nome: </label>
              <input id="nomeDaEntrada" type="text" name="nome" onChange={(e) => setUser(e.target.value)}/>
              <br/>
              <label htmlFor="nomeDaEntrada">Senha: </label>
              <input id="nomeDaEntrad" type="password" name="pass" onChange={(e) => setPass(e.target.value)}/>
              <br/>
              
              <Link to={"/modules"} onClick={() => consulta(user,pass)}>
                <button>entrar</button>
              </Link> 
              
            </div>
          </div>
        </div>
        <span>direitos reservados itoclick</span>
      </main>
    </div>
  )
}

export default Login;
