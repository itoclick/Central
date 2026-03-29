
import express from 'express';
import dotenv from 'dotenv';
import { conectDB } from './Models/conn.js';
import  { modelUsr  }  from './Models/usersModelSchema.js';

const app = express();
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT;





// Conecta a collection users
conectDB();




app.get('/', async(req, res )=>{
  
  try {
    let lista = await modelUsr.find();
    //console.log(lista);
    res.send(lista);    
    
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
});


app.post('/', async(req, res) => {
  try {
    const newUser = await modelUsr.create(req.body)
    res.send(newUser)
    
  } catch (error) {
    res.send(error ? error.errorResponse.errmsg:'Erro ao criar usuário:')
    console.error('Erro ao criar usuário:', error);
  }
  
});

// fazer um api que envie os modulos contratados para cada cliente 
// so tornando possivel acesso ao modulo contratado
// checar login e definir o endereço do banco tambem deve ser feito pela api vindo do banco

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));