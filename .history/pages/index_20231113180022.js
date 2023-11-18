import ProductList from "../components/product/ProductList";
import { Fragment, useEffect, useState } from "react";

function index() {

  const [loadedproducts, setLoadedproducts] = useState([]);
  useEffect(()=>{
    //send fetching data request
    setLoadedproducts(products)
  },[])
  return (
    <Fragment>
      <ProductList products={products} />
    </Fragment>
  );
}

export default index;

export function getStaticProps(){
  // fetch data from endpoint
return{
  props:{

  }
}
}
