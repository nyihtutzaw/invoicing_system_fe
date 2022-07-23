import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import * as InvoiceAction from '../../store/actions/invoice'
function Invoices() {
  const dispatch = useDispatch()
  const invoices = useSelector((state) => state.invoice.invoices)
  React.useEffect(() => {
    dispatch(InvoiceAction.getAll({}))
  }, [])

  return (
    <Layout name="invoices">
      <h2>Invoices</h2>
      {JSON.stringify(invoices.data)}
    </Layout>
  )
}

export default Invoices
