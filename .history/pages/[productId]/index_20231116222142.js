import mongoose from "mongoose";
import ProductDetails from "../../components/product/ProductDetails";
import Product from "../../models/Product";
import dbConnect from "../../../util/mongo";
function index(props) {
  return (
    <ProductDetails
      image={props.productData.image}
      name={props.productData.name}
      price={props.productData.price}
      desc={props.productData.desc}
    />
  );
}

export default index;

export async function getStaticProps(context) {
  const productId = context.params.productId;
  // connect to database to get product ids

  const selectedProduct = await Product.findById({
    _id: new mongoose.Types.ObjectId(productId),
  });

  return {
    props: {
      productData: {
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: selectedProduct.price,
        desc: selectedProduct.desc,
        id: selectedProduct._id.toString(),
      },
    },
  };
}

export function getStaticPaths(){
  // connect to database to get products ids
dbConnect()
const products = await Product.
  return{
    fallback:false,
    paths:[
      {
        params:{
          productId:"1"
        }
      }
    ]
  }
}
