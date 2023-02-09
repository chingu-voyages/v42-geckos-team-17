import React, { useState, useEffect } from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { getAccounts } from '../../../features/account/accountSlice'

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

  useEffect(() => {
    // Load accounts data
    dispatch(getAccounts())
  }, [])

  if (type === 'account') {
    return <NewAccount formData={formData} setFormData={setFormData} />
  } else {
    return <NewTransaction formData={formData} setFormData={setFormData} />
  }
}

export default Modal
