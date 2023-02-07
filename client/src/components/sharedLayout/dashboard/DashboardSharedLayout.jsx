import React from 'react'

// Routing
import { Outlet } from 'react-router-dom'

// Styled Components
import { DashboardContainer } from '../../../styles/LayoutStyles'

// Components
import VerticalNav from './VerticalNav'
import TopMobileNav from './TopMobileNav'
import BottomMobileNav from './BottomMobileNav'
import HeroHeader from './HeroHeader'

function DashboardSharedLayout() {
  return (
    <DashboardContainer>
      <VerticalNav />
      <TopMobileNav />
      <BottomMobileNav />
      <main>
        <HeroHeader />
        <Outlet />
      </main>
    </DashboardContainer>
  )
}

export default DashboardSharedLayout
