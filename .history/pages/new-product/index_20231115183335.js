// /new-product
import axios from 'axios'
import NewProductForm from '../../components/product/NewProductForm'

function index() {
    async  function addProductHandler(enteredProductData){
    const res= await axios.post("/api/products",enteredProductData,{
      headers:{"Content-Type":"application/json", }
    } );
    console.log(res);
  }
  return (
    <NewProductForm onAddProduct={addProductHandler}/>
  )
}

export default index