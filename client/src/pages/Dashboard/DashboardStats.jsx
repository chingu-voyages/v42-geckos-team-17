import React, { useState } from 'react'

// Components
import { RadarChart, LineChart } from '../../components'

// Styled components
import { SecondaryHeading } from '../../styles/TypographyStyles'
import {
  StatsContainer,
  ChartContainer,
  ButtonsContainer,
} from '../../styles/dashboard/stats/StatsStyles'
import { SecondaryButton } from '../../styles/ButtonStyles'

const DashboardStats = () => {
  const [activeChart, setActiveChart] = useState('radar')
  return (
    <>
      <SecondaryHeading app>My statistics</SecondaryHeading>
      <StatsContainer>
        <ButtonsContainer>
          <SecondaryButton
            small
            active={activeChart === 'radar'}
            onClick={() => setActiveChart('radar')}
          >
            Family Comparison
          </SecondaryButton>
          <SecondaryButton
            small
            active={activeChart === 'line'}
            onClick={() => setActiveChart('line')}
          >
            Expenses Overview
          </SecondaryButton>
        </ButtonsContainer>
        <ChartContainer>
          {activeChart === 'radar' && <RadarChart />}
          {activeChart === 'line' && <LineChart />}
        </ChartContainer>
      </StatsContainer>
    </>
  )
}

export default DashboardStats
