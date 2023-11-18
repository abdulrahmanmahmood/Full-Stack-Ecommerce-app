// /new-product
import axios from 'axios'
import NewProductForm from '../../components/product/NewProductForm'

function index() {
  function addProductHandler(){
axios.post("/api/products")
  }
  return (
    <NewProductForm/>
  )
}

export default index