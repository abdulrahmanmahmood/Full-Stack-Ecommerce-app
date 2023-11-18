// http://localhost:3000/api/products

import { dbConnect } from "../../../util/mongo"

export default as function handler(req,res){
  const {method}= req
  dbConnect()
  if(method === 'GET'){
      res
  }
}