
 
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();
const uri = process.env.URI;
const banco = process.env.BANCO;
const tbUsuarios = process.env.TB_USUARIOS;



export  const conectDB = async () => {
  try {
    await mongoose.connect(uri, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:' , error);
  }
 }
    
 export default {conectDB};
