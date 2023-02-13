import React, { useState, useEffect } from 'react'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { openModal, setType } from '../../../features/modal/ModalSlice'

// Routing
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Styled Components
import { DashboardContainer } from '../../../styles/LayoutStyles'

// Components
import VerticalNav from './VerticalNav'
import TopMobileNav from './TopMobileNav'
import BottomMobileNav from './BottomMobileNav'
import HeroHeader from './HeroHeader'
import Modal from '../../dashboard/modal/Modal'

function DashboardSharedLayout() {
  const dispatch = useDispatch()

  // Current page
  const currentPage = useLocation()
  const [page, setPage] = useState({ title: '' })

  // Modal
  const { isOpen, type } = useSelector((store) => store.modal)

  // No scrolling when Modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Modal handler
  const modalHandler = (type) => {
    dispatch(openModal())
    dispatch(setType(type))
  }

  // Get current page
  useEffect(() => {
    if (currentPage.pathname === '/dashboard/home')
      setPage({ title: 'Dashboard', type: 'expense' })
    if (currentPage.pathname === '/dashboard/accounts')
      setPage({ title: 'Accounts', type: 'account' })
    if (currentPage.pathname === '/dashboard/transactions')
      setPage({ title: 'Transactions', type: 'expense' })
    if (currentPage.pathname === '/dashboard/profile')
      setPage({ title: 'Profile' })
    if (currentPage.pathname === '/dashboard/stats')
      setPage({ title: 'Statistics' })
  }, [currentPage])

  return (
    <DashboardContainer>
      <VerticalNav />
      <TopMobileNav />
      <BottomMobileNav modalHandler={modalHandler} page={page} />
      <main>
        <HeroHeader modalHandler={modalHandler} page={page} />
        <Outlet />
      </main>
      {isOpen && <Modal />}
    </DashboardContainer>
  )
}

export default DashboardSharedLayout
