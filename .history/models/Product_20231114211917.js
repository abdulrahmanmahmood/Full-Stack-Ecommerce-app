import mongoose, {models} from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
      name: {
        type:string,
        required:true,
        maxlength:60,
      }
  }
)