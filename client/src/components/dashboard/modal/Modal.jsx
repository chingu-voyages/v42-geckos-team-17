import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getAccounts } from '../../../features/account/accountSlice'

// Modal forms
import NewAccount from './NewAccount'
import NewTransaction from './NewTransaction'

const Modal = () => {
  const dispatch = useDispatch()
  const { type } = useSelector((store) => store.modal)

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

  if (type === 'account') {
    return (
      <NewAccount
        formData={formData}
        setFormData={setFormData}
        errorData={errorData}
        setErrorData={setErrorData}
      />
    )
  } else {
    return (
      <NewTransaction
        formData={formData}
        setFormData={setFormData}
        errorData={errorData}
        setErrorData={setErrorData}
      />
    )
  }
}

export default Modal
