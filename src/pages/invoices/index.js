import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import dayjs from 'dayjs'
import queryString from 'query-string'
import { Button } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import Table from '../../components/Table'
import Layout from '../../components/Layout'
import * as InvoiceAction from '../../store/actions/invoice'

function Invoices() {
  const dispatch = useDispatch()
  const location = useLocation()
  const invoices = useSelector((state) => state.invoice.invoices)
  React.useEffect(() => {
    loadData()
  }, [location.search])

  const loadData = (refresh = false) => {
    let query = { limit: 10, page: 1 }
    if (location.search && !refresh) query = queryString.parse(location.search)
    dispatch(InvoiceAction.getAll(query))
  }

  const headers = [
    'Customer Name',
    'Sale Person',
    'Total',
    'Note',
    'Created At',
  ]

  return (
    <Layout name="invoices">
      <div>
        <Table
          data={invoices}
          title={'Invoices'}
          headers={headers.map((header) => (
            <th className={'headers'} key={`thead-${Math.random()}`}>
              {header}
            </th>
          ))}
          buttons={
            <>
              <Button
                size="small"
                color="primary"
                onClick={() => loadData(true)}
              >
                Refresh
              </Button>
            </>
          }
          rows={invoices?.data?.map((data, index) => (
            <tr key={`table-row-${index}-${Math.random()}`}>
              <td>{data.customer_name}</td>
              <td>{data.sale_person}</td>
              <td>{data.total}</td>
              <td>{data.note}</td>
              <td>{dayjs(data.createdAt).format('DD/MM/YYYY HH:mm')}</td>
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
