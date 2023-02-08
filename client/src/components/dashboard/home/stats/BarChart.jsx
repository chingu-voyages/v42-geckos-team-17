import React from 'react'

// Chartjs
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top',
    },
  },
}

const BarChart = ({ income }) => {
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

  return <Bar options={options} data={data} />
}

export default BarChart
