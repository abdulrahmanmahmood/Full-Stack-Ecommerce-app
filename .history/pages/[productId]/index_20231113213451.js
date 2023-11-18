import ProductDetails from "../../components/product/ProductDetails";

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
