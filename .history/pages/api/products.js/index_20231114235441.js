// http://localhost:3000/api/products

import Product from "../../../models/Product";
import { dbConnect } from "../../../util/mongo";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const products = await Product.find();
      res.status(200).json({ data: products });
    } catch (error) {
      res.status(500).json({message:error});
    }
  }
  if(method ==='POST'){
    try{
      
    }
  }
}
