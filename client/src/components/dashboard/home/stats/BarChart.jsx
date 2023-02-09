/* eslint-disable */
import React from 'react'

// Chartjs
import 'chartjs-adapter-moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
)

// Vertical bar options
const verticalBarOptions = {
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value, index, ticks) {
          return value + ' $'
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

// Horizontal bar options
const horizontalBarOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

const BarChart = ({ income }) => {
  console.log(income)
  // Data for chart js
  const data = {
    labels: income.map((incomeItem) => incomeItem.date),
    datasets: [
      {
        label: 'Income in USD',
        data: income.map((incomeItem) => +incomeItem.amount),
        backgroundColor: '#F2F2F2',
      },
    ],
  }

  return (
    <>
      <Bar className="vertical" options={verticalBarOptions} data={data} />
      <Bar className="horizontal" options={horizontalBarOptions} data={data} />
    </>
  )
}

export default BarChart
