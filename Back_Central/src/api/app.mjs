
import express from 'express';
import dotenv from 'dotenv';
import { conectDB } from './Models/conn.js';
import  { modelUsr  }  from './Models/usersModelSchema.js';
import cors from 'cors';
import { comparaUsers } from './Midwers/MdRepo.js';

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));
dotenv.config();
const PORT = process.env.PORTBACK || 3001;





// Conecta a collection users
conectDB();








app.get('/', async(req, res )=>{
  
  
  try {
    let lista = "Bem Vindo A API do Central";
    //console.log(lista);
    res.send(lista);    
    
  } catch (error) {
    console.error('Erro ao acessar API:', error);
  }
});


app.get('/login', async(req, res )=>{
 
  let inserido = JSON.stringify(req.body);
  try {
    
    let consulta = await comparaUsers(inserido)
    await console.log(consulta)

    if(!consulta){
      await console.log('usuário não encontrado!');
      res.status(401).send('Usuario ou senha incorretos!')
    }else{  res.status(200).send({ consulta }); }  
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
});




// fazer um api que envie os modulos contratados para cada cliente 
// so tornando possivel acesso ao modulo contratado
// checar login e definir o endereço do banco tambem deve ser feito pela api vindo do banco

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));