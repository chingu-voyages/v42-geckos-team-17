/* eslint-disable consistent-return */
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getAccounts } from '../../../features/account/accountSlice'
import { closeModal, setType } from '../../../features/modal/ModalSlice'

// Modal forms
import NewAccount from './NewAccount'
import NewTransaction from './NewTransaction'

// Styled components
import { PrimaryHeading } from '../../../styles/TypographyStyles'
import {
  Overlay,
  ModalContainer,
  ButtonsContainer,
} from '../../../styles/dashboard/ModalStyles'
import { IconButton, SecondaryButton } from '../../../styles/ButtonStyles'

// Icon
import { CloseIcon } from '../../../assets/icons/icons'

const Modal = () => {
  const dispatch = useDispatch()
  const { type } = useSelector((store) => store.modal)

  // Handle overlay click => close modal
  const overlayClickHandler = (e) => {
    if (e.target.classList.contains('overlay')) {
      dispatch(closeModal())
    }
  }

  // Form
  const [formData, setFormData] = useState({
    accountName: '',
    amount: '',
    category: '',
    account: '',
    color: '',
  })

  // Error
  const [errorData, setErrorData] = useState({
    accountNameErr: '',
    amountErr: '',
    categoryErr: '',
    accountErr: '',
    colorErr: '',
  })

  useEffect(() => {
    // Load accounts data
    dispatch(getAccounts())
  }, [])

  return ReactDOM.createPortal(
    <Overlay className="overlay" onClick={(e) => overlayClickHandler(e)}>
      <ModalContainer>
        {/* Start: Close button */}
        <IconButton
          onClick={() => dispatch(closeModal())}
          aria-label="close modal"
        >
          <CloseIcon />
        </IconButton>
        {/* End: Close button */}
        {/* Start: Heading */}
        <PrimaryHeading app>
          {type === 'account' ? 'Add new account' : 'Add new transaction'}
        </PrimaryHeading>
        {/* End: Heading */}
        {/* Start: Buttons */}
        {type !== 'account' && (
          <ButtonsContainer>
            <SecondaryButton
              small
              active={type === 'expense'}
              onClick={() => dispatch(setType('expense'))}
            >
              Expense
            </SecondaryButton>
            <SecondaryButton
              small
              active={type === 'income'}
              onClick={() => dispatch(setType('income'))}
            >
              Income
            </SecondaryButton>
          </ButtonsContainer>
        )}
        {/* End: Buttons */}
        {/* Start: Form */}
        {type === 'account' ? (
          <NewAccount
            formData={formData}
            setFormData={setFormData}
            errorData={errorData}
            setErrorData={setErrorData}
          />
        ) : (
          <NewTransaction
            formData={formData}
            setFormData={setFormData}
            errorData={errorData}
            setErrorData={setErrorData}
          />
        )}
        {/* End: Form */}
      </ModalContainer>
    </Overlay>,
    document.getElementById('portal')
  )
}

export default Modal
