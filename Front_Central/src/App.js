import logo from '../public/central.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <main>
        <div id="fundoretangulo">
          <div>
            <img src={logo} alt="logo" id="img"/>
            <h3>Bem vindo.</h3>
            <div id="inputs">
              <label htmlFor="nomeDaEntrada">Nome: </label>
              <input id="nomeDaEntrada" type="text" name="nome"/>
              <br/>
              <label htmlFor="nomeDaEntrada">Senha: </label>
            <input id="nomeDaEntrada" type="password" name="pass"/>
            <br/>
              <button>
                entrar
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
