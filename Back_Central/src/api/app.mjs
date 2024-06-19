
import express from 'express';
import dotenv from 'dotenv'
const app = express();
import { MongoClient } from 'mongodb'


dotenv.config()
const PORT = process.env.PORT;

//const rescue = require('express-rescue');
//const UserController = require('../controllers/user');
//const errorMiddleware = require('../middlewares/error');



app.get('/', (req, res )=>{
    console.log(JSON.stringify(req))
    res.send("okokok")
    
});

//app.use(errorMiddleware); 

// fazer um api que envie os modulos contratados para cada cliente 
// so tornando possivel acesso ao modulo contratado
// checar login e definir o endereço do banco tambem deve ser feito pela api vindo do banco

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`));

