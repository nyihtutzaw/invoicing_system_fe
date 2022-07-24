import React from 'react'
import InfoForm from './infoForm'
import ProductForm from './productForm'
import Layout from '../../components/Layout'

function Home() {
  const onSubmit = (values) => {}

  return (
    <Layout name="home">
      <>
        <h5>New Invoice</h5>
        <ProductForm />
        <InfoForm onSubmit={onSubmit} />
      </>
    </Layout>
  )
}

export default Home
