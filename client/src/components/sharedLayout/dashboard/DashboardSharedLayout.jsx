import React from 'react'

// Routing
import { Outlet } from 'react-router-dom'

// Components
import VerticalNav from './VerticalNav'

function DashboardSharedLayout() {
  return (
    <>
      <VerticalNav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default DashboardSharedLayout
