import React from 'react'
import { Card } from 'reactstrap'
import Layout from '../../components/Layout'
import LineGraph from './lineGraph'
function Graphs() {
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ]

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Revenue',
      },
    },
  }

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

  return (
    <Layout name="graphs">
      <Card
        className="ml-3 mr-5 p-3 mb-4"
        style={{ minWidth: 400, maxWidth: 750 }}
      >
        <LineGraph options={options} data={data} />;
      </Card>
      <Card
        className="ml-3 mr-5 p-3 mb-4"
        style={{ minWidth: 400, maxWidth: 750 }}
      >
        <LineGraph options={options} data={data} />;
      </Card>
      <Card
        className="ml-3 mr-5 p-3 mb-4"
        style={{ minWidth: 400, maxWidth: 750 }}
      >
        <LineGraph options={options} data={data} />;
      </Card>
    </Layout>
  )
}

export default Graphs
