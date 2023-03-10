import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getAll as getAllIncome } from '../../../../features/income/incomeSlice'
import { getTop as getTopExpenses } from '../../../../features/expense/expenseSlice'

// Components
import BarChart from './BarChart'
import DoughnutChart from './DoughnutChart'

// Styled components
import { SecondaryHeading } from '../../../../styles/TypographyStyles'
import {
  UserStatsContainer,
  ButtonsContainer,
  ChartsContainer,
} from '../../../../styles/dashboard/home/userStatsStyles'
import { SecondaryButton } from '../../../../styles/ButtonStyles'

function UserStats() {
  const [isBarChart, setIsBarChart] = useState(false)

  // Redux
  const dispatch = useDispatch()
  const { income } = useSelector((store) => store.income)
  const { expensesTop } = useSelector((store) => store.expense)

  useEffect(() => {
    // Get income data
    dispatch(getAllIncome())

    // Get expense data
    dispatch(getTopExpenses())
  }, [])

  return (
    <UserStatsContainer>
      {/* Start: Section heading */}
      <div>
        <SecondaryHeading app>My statistics</SecondaryHeading>
        <span>Last 30 days</span>
      </div>
      {/* End: Section heading */}
      {/* Start: Buttons */}
      <ButtonsContainer>
        <SecondaryButton
          active={!isBarChart}
          onClick={() => setIsBarChart(false)}
          small
        >
          Expenses
        </SecondaryButton>
        <SecondaryButton
          active={isBarChart}
          onClick={() => setIsBarChart(true)}
          small
        >
          Income
        </SecondaryButton>
      </ButtonsContainer>
      {/* End: Buttons */}
      {/* Start: Charts */}
      <ChartsContainer>
        {isBarChart ? (
          <BarChart income={income} />
        ) : (
          <DoughnutChart expenses={expensesTop} />
        )}
      </ChartsContainer>
      {/* End: Charts */}
    </UserStatsContainer>
  )
}

export default UserStats
