// /new-product
import axios from 'axios'
import NewProductForm from '../../components/product/NewProductForm'

function index() {
  function addProductHandler(enteredProductData){
    await axios.post("/api/products",enteredProductData )
  }
  return (
    <NewProductForm onAddProduct={addProductHandler}/>
  )
}

export default index