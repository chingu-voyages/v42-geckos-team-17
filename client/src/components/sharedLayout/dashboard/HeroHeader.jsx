import React, { useEffect, useState } from 'react'

// Routing
import { useLocation } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { openModal, setType } from '../../../features/modal/ModalSlice'

// Components
import Modal from '../../dashboard/modal/Modal'

// Styled components
import { HeroHeaderContainer } from '../../../styles/dashboard/HeroHeaderStyles'
import { PrimaryHeading } from '../../../styles/TypographyStyles'
import { PrimaryButton } from '../../../styles/ButtonStyles'

function HeroHeader() {
  const dispatch = useDispatch()
  const currentPage = useLocation()
  const [page, setPage] = useState({ title: '' })

  // Modal
  const { isOpen } = useSelector((store) => store.modal)

  // No scrolling when Modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

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
    <HeroHeaderContainer>
      <PrimaryHeading app>{page.title}</PrimaryHeading>
      {page.type && (
        <PrimaryButton onClick={() => modalHandler(page.type)}>
          Add new
        </PrimaryButton>
      )}
      {/* Start: Modal */}
      {isOpen && <Modal />}
      {/* End: Modal */}
    </HeroHeaderContainer>
  )
}

export default HeroHeader
