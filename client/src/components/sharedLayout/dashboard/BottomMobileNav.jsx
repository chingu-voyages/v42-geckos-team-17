import React, { useState, useEffect } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { openModal, setType } from '../../../features/modal/ModalSlice'

// Routing
import { useLocation } from 'react-router-dom'

// Styled components
import { IconLink } from '../../../styles/LinkStyles'
import {
  BottomMobileNavContainer,
  Navigation,
  AddButton,
} from '../../../styles/dashboard/MobileNavStyles'

// Icons
import { PlusIcon } from '../../../assets/icons/dashboardIcons'

// Links data
import dashboardLinks from '../../../assets/links/dashboard'

function BottomMobileNav() {
  const dispatch = useDispatch()
  const currentPage = useLocation()
  const [page, setPage] = useState({ title: '' })

  const modalHandler = (type) => {
    dispatch(openModal())
    dispatch(setType(type))
  }

  useEffect(() => {
    if (currentPage.pathname === '/dashboard')
      setPage({ title: 'Dashboard', type: 'account' })
    if (currentPage.pathname === '/dashboard/accounts')
      setPage({ title: 'Accounts', type: 'account' })
    if (currentPage.pathname === '/dashboard/transactions')
      setPage({ title: 'Transactions', type: 'expense' })
    if (currentPage.pathname === '/dashboard/profile')
      setPage({ title: 'Profile' })
  }, [currentPage])
  return (
    <BottomMobileNavContainer>
      {/* Start: Nav Links */}
      <Navigation>
        {dashboardLinks.map((link) => (
          <li key={link.name}>
            <IconLink to={link.href}>{link.icon}</IconLink>
          </li>
        ))}
      </Navigation>
      {/* End: Nav Links */}
      {/* Start: Add button */}
      <AddButton onClick={() => modalHandler(page.type)} aria-label="add new">
        <PlusIcon />
      </AddButton>
      {/* End: Add button */}
    </BottomMobileNavContainer>
  )
}

export default BottomMobileNav
