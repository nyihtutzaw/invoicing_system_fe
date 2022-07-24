import React from 'react'
import { Card } from 'reactstrap'
import Layout from '../../components/Layout'
import LineGraph from './lineGraph'
import * as InvoiceAction from '../../store/actions/invoice'
import { useDispatch, useSelector } from 'react-redux'
function Graphs() {
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading.loading)
  const invoice_chart = useSelector((state) => state.invoice.invoice_chart)
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'Invoicing Total',
        data: [100, 200, 30],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const dailyDataSets = {
    labels: invoice_chart.daily?.map((d) => d.date),
    datasets: [
      {
        label: 'Invoicing Total',
        data: invoice_chart.daily?.map((d) => d.total),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const montlyDataSets = {
    labels: invoice_chart.monthly?.map((d) => d.month),
    datasets: [
      {
        label: 'Invoicing Total',
        data: invoice_chart.monthly?.map((d) => d.total),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  const yearlyDataSets = {
    labels: invoice_chart.yearly?.map((d) => d.year),
    datasets: [
      {
        label: 'Invoicing Total',
        data: invoice_chart.yearly?.map((d) => d.total),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  React.useEffect(() => {
    dispatch(InvoiceAction.getChartData())
  }, [])

  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <Layout name="graphs">
      <Card
        className="ml-3 mr-5 p-3 mb-4"
        style={{ minWidth: 400, maxWidth: 750 }}
      >
        <LineGraph name="Daily" data={dailyDataSets} />;
      </Card>
      <Card
        className="ml-3 mr-5 p-3 mb-4"
        style={{ minWidth: 400, maxWidth: 750 }}
      >
        <LineGraph name="Montly" data={montlyDataSets} />;
      </Card>
      <Card
        className="ml-3 mr-5 p-3 mb-4"
        style={{ minWidth: 400, maxWidth: 750 }}
      >
        <LineGraph name="Yearly" data={yearlyDataSets} />;
      </Card>
    </Layout>
  )
}

export default Graphs
