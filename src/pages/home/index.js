import React from 'react'
import InfoForm from './infoForm'
import ProductForm from './productForm'
import Layout from '../../components/Layout'

function Home() {
  const [products, setProducts] = React.useState([])
  const onSubmit = (values) => {
    if (products.length > 0) {
      const productArray = products.map((product) => product.id)
      values.product_ids = productArray
      console.log(values)
    }
  }

  return (
    <Layout name="home">
      <>
        <h5>New Invoice</h5>
        <ProductForm products={products} setProducts={setProducts} />
        <InfoForm onSubmit={onSubmit} />
      </>
    </Layout>
  )
}

export default Home
