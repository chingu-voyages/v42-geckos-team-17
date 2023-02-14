/* eslint-disable consistent-return */
import React from 'react'

// Date
import moment from 'moment'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../../features/modal/ModalSlice'
import { addNewTransaction } from '../../../features/transaction/transactionSlice'
import { addNewIncome } from '../../../features/income/incomeSlice'

// Data
import categories from '../../../assets/data/dashboard/categoriesData'

// Components
import FormInputGroup from '../../form/FormInputGroup'
import FormSelectGroup from '../../form/FormSelectGroup'

// Styled components
import { FormContainer } from '../../../styles/dashboard/ModalStyles'
import { PrimaryButton } from '../../../styles/ButtonStyles'

// Validation
import { validateAmount } from '../../../utils/validation'

const NewTransaction = ({ formData, setFormData, errorData, setErrorData }) => {
  const dispatch = useDispatch()
  const { type } = useSelector((store) => store.modal)
  const { accounts } = useSelector((store) => store.account)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Temporary error data variable
    let temporaryErrorData = errorData

    /// /////////////////////////////////
    // Validate amount
    if (formData.amount === '') {
      temporaryErrorData = {
        ...temporaryErrorData,
        amountErr: 'Please enter amount.',
      }
    } else if (!validateAmount(formData.amount)) {
      temporaryErrorData = {
        ...temporaryErrorData,
        amountErr: 'Invalid amount is given.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        amountErr: '',
      }
    }

    /// /////////////////////////////////
    // Validate category
    if (type === 'expense') {
      if (
        formData.category === 'Choose category:' ||
        formData.category === ''
      ) {
        temporaryErrorData = {
          ...temporaryErrorData,
          categoryErr: 'Please select category.',
        }
      } else {
        temporaryErrorData = {
          ...temporaryErrorData,
          categoryErr: '',
        }
      }
    }

    if (formData.account === 'Choose account:' || formData.account === '') {
      /// /////////////////////////////////
      // Validate account
      temporaryErrorData = {
        ...temporaryErrorData,
        accountErr: 'Please select account.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        accountErr: '',
      }
    }

    setErrorData({ ...errorData, ...temporaryErrorData })

    /// /////////////////////////////////
    // If no errors
    if (
      temporaryErrorData.amountErr === '' &&
      temporaryErrorData.categoryErr === '' &&
      temporaryErrorData.accountErr === ''
    ) {
      // Add new transaction
      if (type === 'expense') {
        dispatch(
          addNewTransaction({
            id: `transaction-${Math.random() * 100}`,
            categoryId: formData.category,
            amount: `-${formData.amount}`,
            from: 'account',
          })
        )

        dispatch(closeModal())
      } else {
        // Add new income
        dispatch(
          addNewIncome({
            id: `income-${Math.random() * 100}`,
            amount: `${formData.amount}`,
            date: moment().format('MMM Do'),
          })
        )

        // Add new transaction
        dispatch(
          addNewTransaction({
            id: `transaction-${Math.random() * 100}`,
            categoryId: 'account',
            amount: `${formData.amount}`,
            from: 'cash',
          })
        )

        dispatch(closeModal())
      }
      // Clear fields
      formData.amount = ''
      formData.category = ''
      formData.account = ''
    }
  }

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <FormInputGroup
        webapp
        type="text"
        name="amount"
        value={formData.amount}
        handleChange={(e) =>
          setFormData({ ...formData, amount: e.currentTarget.value })
        }
        errorMsg={errorData.amountErr}
        placeholderText="Amount"
      />
      {type === 'expense' && (
        <FormSelectGroup
          webapp
          name="category"
          options={categories.map((category) => category.name)}
          value={formData.category}
          handleChange={(selectedCategory) =>
            setFormData({ ...formData, category: selectedCategory })
          }
          errorMsg={errorData.categoryErr}
          placeholderText="Choose category:"
        />
      )}
      <FormSelectGroup
        webapp
        name="account"
        options={accounts.map((account) => account.name)}
        value={formData.account}
        handleChange={(selectedAccount) =>
          setFormData({ ...formData, account: selectedAccount })
        }
        errorMsg={errorData.accountErr}
        placeholderText="Choose account:"
      />
      <PrimaryButton>Submit</PrimaryButton>
    </FormContainer>
  )
}

export default NewTransaction
