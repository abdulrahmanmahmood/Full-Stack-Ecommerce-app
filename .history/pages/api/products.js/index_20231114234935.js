// http://localhost:3000/api/products

import { dbConnect } from "../../../util/mongo"

export default function handler(req,res){
  const {method}= req
  dbConnect
}