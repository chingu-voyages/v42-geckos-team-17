import React, { useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getFamilyExpenses } from '../../../features/expense/expenseSlice'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

// Hex to rgb converter
import hexToRGB from '../../../utils/hexToRGB'

const RadarChart = () => {
  // Redux
  const dispatch = useDispatch()
  const { familyExpenses } = useSelector((store) => store.expense)

  useEffect(() => {
    // Get family expenses data
    dispatch(getFamilyExpenses())
  }, [])

  const familyData = familyExpenses.members.map((member) => {
    return {
      label: member.name,
      data: member.totals,
      backgroundColor: hexToRGB(member.color, 0.2),
      borderColor: member.color,
      borderWidth: 1,
    }
  })
  const data = {
    labels: familyExpenses.categories,
    datasets: familyData,
  }

  return <Radar data={data} />
}

export default RadarChart
