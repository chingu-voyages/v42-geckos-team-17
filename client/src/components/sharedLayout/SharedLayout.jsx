import React from 'react'

// Routing
import { Outlet } from 'react-router-dom'

// Components
import HeaderNav from './HeaderNav'
import Footer from './Footer'

function SharedLayout() {
  return (
    <>
      <HeaderNav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default SharedLayout
