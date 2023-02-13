import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

// Hex to rgb converter
import hexToRGB from '../../../../utils/hexToRGB'

// Categories data
import categories from '../../../../assets/data/dashboard/categoriesData'

// Components
import LegendItem from './LegendItem'

// Styled components
import {
  DoughnutChartContainer,
  DoughnutLegend,
} from '../../../../styles/dashboard/home/userStatsStyles'

// Chartjs

ChartJS.register(ArcElement, Tooltip, Legend)

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
}

function DoughnutChart({ expenses }) {
  // Get array of corresponding color for each expense
  const colors = expenses
    .map((expense) => expense.categoryId)
    .map((categoryName) => {
      const { color } = categories.find(
        (category) => category.id === categoryName
      )
      return [color, hexToRGB(color, 0.2)]
    })

  const data = {
    labels: expenses.map((expenseItem) => expenseItem.categoryId),
    datasets: [
      {
        label: 'spend in %',
        data: expenses.map((expenseItem) => +expenseItem.percent),
        backgroundColor: [...colors.map((color) => color[1])],
        borderColor: [...colors.map((color) => color[0])],
        borderWidth: 1,
      },
    ],
  }

  return (
    <DoughnutChartContainer>
      <div className="doughnut">
        <Doughnut options={options} data={data} />
      </div>
      <DoughnutLegend>
        {expenses.map((expenseItem) => (
          <LegendItem key={expenseItem.id} expenseItem={expenseItem} />
        ))}
      </DoughnutLegend>
    </DoughnutChartContainer>
  )
}

export default DoughnutChart
