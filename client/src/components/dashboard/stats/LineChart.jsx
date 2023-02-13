import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getTotalExpensesByDay } from '../../../features/expense/expenseSlice'

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Hex to rgb converter
import hexToRGB from '../../../utils/hexToRGB'

// Vertical line options
const verticalLineOptions = {
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

// Horizontal line options
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

const LineChart = () => {
  // Redux
  const dispatch = useDispatch()
  const { totalExpensesByDay } = useSelector((store) => store.expense)

  useEffect(() => {
    // Get family expenses data
    dispatch(getTotalExpensesByDay())
  }, [])

  const labels = totalExpensesByDay.map((day) => day.date)

  const data = {
    labels,
    datasets: [
      {
        label: 'Total expenses in USD',
        data: totalExpensesByDay.map((day) => day.total),
        borderColor: '#74c69d',
        backgroundColor: hexToRGB('#74c69d', 0.5),
      },
    ],
  }

  return (
    <>
      <Line className="vertical" options={verticalLineOptions} data={data} />
      <Line className="horizontal" options={horizontalBarOptions} data={data} />
    </>
  )
}

export default LineChart
