import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from '../../components/Table'
import Layout from '../../components/Layout'
import * as InvoiceAction from '../../store/actions/invoice'
import { Button } from 'reactstrap'
function Invoices() {
  const dispatch = useDispatch()
  const invoices = useSelector((state) => state.invoice.invoices)
  React.useEffect(() => {
    dispatch(InvoiceAction.getAll({}))
  }, [])

  const headers = [
    'Customer Name',
    'Sale Person',
    'Total',
    'Note',
    'Created At',
  ]

  return (
    <Layout name="invoices">
      <div className="address-table">
        <Table
          data={invoices}
          title={'Invoices'}
          headers={headers.map((header) => (
            <th className={'headers'} key={`thead-${Math.random()}`}>
              {header}
            </th>
          ))}
          rows={invoices?.data?.map((data, index) => (
            <tr key={`table-row-${index}-${Math.random()}`}>
              <td>{data.customer_name}</td>
              <td>{data.sale_person}</td>
              <td>{data.total}</td>
              <td>{data.note}</td>
              <td>{data.createdAt}</td>
              <td>
                <Button size="sm">Detail</Button>
              </td>
            </tr>
          ))}
        />
      </div>
    </Layout>
  )
}

export default Invoices
