import React, { useEffect, useState } from 'react'

// Routing
import { useLocation } from 'react-router-dom'

// Styled components
import { HeroHeaderContainer } from '../../../styles/dashboard/HeroHeaderStyles'
import { PrimaryHeading } from '../../../styles/TypographyStyles'
import { PrimaryButton } from '../../../styles/ButtonStyles'

function HeroHeader() {
  const currentPage = useLocation()
  const [page, setPage] = useState({ title: '' })

  const modalHandler = () => {}

  useEffect(() => {
    if (currentPage.pathname === '/dashboard')
      setPage({ title: 'Dashboard', modalHandler })
    if (currentPage.pathname === '/dashboard/accounts')
      setPage({ title: 'Accounts', modalHandler })
    if (currentPage.pathname === '/dashboard/transactions')
      setPage({ title: 'Transactions', modalHandler })
    if (currentPage.pathname === '/dashboard/profile')
      setPage({ title: 'Profile' })
  }, [currentPage])

  return (
    <HeroHeaderContainer>
      <PrimaryHeading app>{page.title}</PrimaryHeading>
      {page.modalHandler && <PrimaryButton>Add new</PrimaryButton>}
    </HeroHeaderContainer>
  )
}

export default HeroHeader
