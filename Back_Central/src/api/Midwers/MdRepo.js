
import { modelUsr } from '../Models/usersModelSchema.js';




export const comparaUsers = async (inserido) => {
  try {
  let dobanco = await modelUsr.findOne({nome: inserido.nome});
  
    if (inserido.nome === dobanco.nome ) {
    return  dobanco
    } else {  return false; } 
  } catch (error) {
      console.error('Erro ao comparar usuários:', error);
      throw error;
    }
}

export default {
 comparaUsers
};