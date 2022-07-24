import React from 'react'
import { Card } from 'reactstrap'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
function LineGraph({ options, data }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  return (
    <Card
      className="ml-3 mr-5 p-3 mb-4"
      style={{ minWidth: 400, maxWidth: 750 }}
    >
      <Line options={options} data={data} />;
    </Card>
  )
}

export default LineGraph
