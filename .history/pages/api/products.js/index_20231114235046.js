// http://localhost:3000/api/products

import { dbConnect } from "../../../util/mongo"

export default async function handler(req,res){
  const {method}= req
  dbConnect()
  if(method === 'GET'){
      await Product
  }
}