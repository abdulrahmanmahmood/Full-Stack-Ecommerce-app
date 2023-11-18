import ProductDetails from "../../components/product/ProductDetails";
import Product frm '../../models/Product'
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

export function getStaticProps(context){
  const productId = context.params.productId;
return{
  props:{
    productData:{
      image:"https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Watermelon",
      price:20,
      desc:"this is a watermelon",
      id:productId,
    }
  }
}
};

export function getStaticPaths(){
  const productId = context.params.productId

  // connect to database to get product ids
  Product.findById()
  return{
    props:{
      productData:{
        image:'',
        name:"apple",
        price:16,
        desc:"telkjakfjdlf",
        id:productId
      }
    }
  }
}
