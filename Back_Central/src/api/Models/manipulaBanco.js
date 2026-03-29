import { ObjectId } from 'mongodb';
//import {conn} from  './usersModelSchema.js';
//const {getbyid} = require('./productModel');

//import rescue from 'rescue';
const z =0;




export const getAll = async() => { 
  
  
  console.log('todos os usuarios');
  return 'todos os usuarios';
      
    
};  

  
  
    
 


export const onlyOne = async(_id) => {
  return await conn().then(
    async(db) => { return await  db.collection('products').findOne(ObjectId(_id));}
  );
     
};

export const getBy = async(id) => {
  const onSale = await conn().then(db => db.collection('sales').findOne(ObjectId(id)));
  return onSale;
  
};



export const decrement = async(arrvenda) => {
  https://www.mongodb.com/pt-br/docs/drivers/node/current/connect/
  
  //console.log('smodel42', arrvenda);
  for await (pdt of arrvenda){ 
    const produ = await oneprodu(pdt.productId);
    console.log('produ', produ);
    console.log('qtd', produ.quantity);
    const sbt = produ.quantity - pdt.quantity;

    conn().then(
      async (db) => {
        await db.collection('products').updateOne(
          {_id: ObjectId(pdt.productId)}, {$set: {quantity: sbt}}
        );
      }
    );
  }
};

export const newU =async(arrvenda)=>{
  const arr = arrvenda.map(({productId, quantity})=>{
    return {productId, quantity};  
  });
  return(
    conn().then( 
      async(db)=>{
        const inserted = await db.collection('sales').insertOne(
          {itensSold: arr}
        );
        //console.log('smodel67:', inserted.ops[0]);
        return(inserted.ops[0]);
      }
    )
  );
  
};


export const updates = async(id, body) => 
  conn().then( async (db) => { 
    const result = await db.collection('sales').updateOne(
      {_id: ObjectId(id)}, {$set:{itensSold: body }});
    return await (getBy(id));
  });
;


export const deleteU = async(id) => {
  return conn().then(
    async (db) => await db.collection('sales').deleteOne({_id:ObjectId(id)})
  );
}; 

export const increment = async(arrvenda) => {
  //console.log('smodel42', arrvenda);
  const{ productId, quantity } = arrvenda[0];
  const produ = await onlyOne(productId);
  //console.log('smodel49', produ);
  const numberSuma = produ.quantity + quantity;
  conn().then(
    async (db) => {
      db.collection('products').updateOne(
        {_id: ObjectId(productId)}, {$set: {quantity: numberSuma}}
      );
    }
  ); 
};



export default {
  getAll,
  onlyOne,
  deleteU,
  getBy,
  updates,
  decrement,
  increment,
  newU,
};