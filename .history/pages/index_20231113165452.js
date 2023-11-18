import ProductList from '../components/product/ProductList'
import { Fragment } from 'react'

function index() {
  const products = [{
    id:1,
    image:'https:images.pexels.com/photos/20'
  }]
  return (
    <Fragment>
      <ProductList products={products}/>
    </Fragment>
  )
}

export default index