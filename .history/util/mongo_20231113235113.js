import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Invalid environment variable: MONGO_URI");
}

export const dbConnect = async ()=>{
    try{
    const {connection} = await mongoose.connect(MONGO_URI)
    if(connection.readyState ==1){
      return 
    }
    }catch(error){

    }
}