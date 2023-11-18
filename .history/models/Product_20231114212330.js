import mongoose, { models } from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: string,
      required: true,
      maxLength: 60,
    },
    desc: {
      type: string,
      required: true,
      maxLength: 200,
    },
    imaged: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = models.Product || mongoose.model("Product", ProductSchema);

export default Pro