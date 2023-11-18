import ProductDetails from "../../components/product/ProductDetails";

function index(props) {
  return (
    <ProductDetails
      image={props.ProductDetails.i}
      name="Watermelon"
      price={20}
      desc="this is a watermelon"
    />
  );
}

export default index;

export function getStaticProps(){
return{
  props:{
    productData:{
      image:"https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name:"Watermelon",
      price:20,
      desc:"this is a watermelon"
    }
  }
}
}
