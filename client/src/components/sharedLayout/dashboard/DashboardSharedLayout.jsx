import React from 'react'

// Routing
import { Outlet } from 'react-router-dom'

// Styled Components
import { DashboardContainer } from '../../../styles/LayoutStyles'

// Components
import VerticalNav from './VerticalNav'

function DashboardSharedLayout() {
  return (
    <DashboardContainer>
      <VerticalNav />
      <main>
        <Outlet />
      </main>
    </DashboardContainer>
  )
}

export default DashboardSharedLayout
