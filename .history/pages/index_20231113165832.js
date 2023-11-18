import ProductList from '../components/product/ProductList'
import { Fragment } from 'react'

function index() {
  const products = [{
    id:1,
    image:'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Watermelon',
    price:20,
    desc:"this is a watermelon",
  },
  {
    id:2,
    image:'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name:'Watermelon',
    price:20,
    desc:"this is a watermelon",
  }
]
  return (
    <Fragment>
      <ProductList products={products}/>
    </Fragment>
  )
}

export default index