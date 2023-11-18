import ProductList from '../components/product/ProductList'
import { Fragment } from 'react'

function index() {
  const products = []
  return (
    <Fragment>
      <ProductList products={products}/>
    </Fragment>
  )
}

export default index