// http://localhost:3000/api/products

import Product from "../../../models/Product"
import { dbConnect } from "../../../util/mongo"

export default async function handler(req,res){
  const {method}= req
  dbConnect()
  if(method === 'GET'){
    const products =  await Product.find()
  }
}