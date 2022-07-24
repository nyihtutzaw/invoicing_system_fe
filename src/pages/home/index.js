import React from 'react'
import { useForm } from 'react-hook-form'
import InfoForm from './infoForm'
import ProductForm from './productForm'
import Layout from '../../components/Layout'
import { useDispatch } from 'react-redux'
import * as InvoiceAction from './../../store/actions/invoice'

function Home() {
  const [products, setProducts] = React.useState([])
  const getTotal = React.useCallback(() => {
    let total = 0
    products.forEach((product) => {
      total += product.price * product.qty
    })
    return total
  }, [products])
  const dispatch = useDispatch()

  const form = useForm()

  const onSubmit = (values) => {
    if (products.length > 0) {
      const productArray = products.map((product) => {
        return {
          id: product.id,
          amount: product.qty,
          price: product.price,
        }
      })
      values.product_ids = productArray
      values.total = getTotal()
      dispatch(InvoiceAction.store(values))
      form.reset()
      setProducts([])
    }
  }

  return (
    <Layout name="home">
      <>
        <h5>New Invoice</h5>
        <ProductForm
          getTotal={getTotal}
          products={products}
          setProducts={setProducts}
        />
        <InfoForm onSubmit={onSubmit} form={form} />
      </>
    </Layout>
  )
}

export default Home
