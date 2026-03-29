import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({ 
  "permisso": [String],
  "matricula": Number,
  "nome": String,
  "setor": String,
  "sexo": String,
  "unidade": String,
  "senha": String,
  "morada": String
});


export const modelUsr = mongoose.model("Users", userSchema);

export default  modelUsr;
