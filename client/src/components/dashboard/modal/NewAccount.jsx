import React from 'react'

// Components
import FormInputGroup from '../../form/FormInputGroup'
import FormSelectGroup from '../../form/FormSelectGroup'

// Styled components
import {
  FormContainer,
  CardContainer,
  AccountColors,
  AccountColorsContainer,
  AccountColorButton,
} from '../../../styles/dashboard/ModalStyles'
import { PrimaryButton } from '../../../styles/ButtonStyles'

// Data
const accountTypes = ['cash', 'bank account', 'loan']
const accountColors = [
  '#C9184A',
  '#2EC4B6',
  '#A2D2FF',
  'linear-gradient(47deg, rgba(251,248,204,1) 0%, rgba(255,207,210,1) 100%);',
  '#CDB4DB',
  'linear-gradient(47deg, rgba(189,224,254,1) 0%, rgba(255,200,221,1) 100%);',
]

const NewAccount = ({ formData, setFormData }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)}>
      <CardContainer>
        <FormInputGroup
          webapp
          type="text"
          name="accountName"
          value={formData.accountName}
          handleChange={(e) =>
            setFormData({
              ...formData,
              accountName: e.currentTarget.value,
            })
          }
          placeholderText="Account name"
        />
        <FormInputGroup
          webapp
          type="text"
          name="amount"
          value={formData.amount}
          handleChange={(e) =>
            setFormData({ ...formData, amount: e.currentTarget.value })
          }
          placeholderText="Amount"
        />
      </CardContainer>
      <AccountColors>
        <span>Decoration</span>
        <AccountColorsContainer>
          {accountColors.map((color, index) => (
            <AccountColorButton
              key={`color-${index}`}
              color={color}
            ></AccountColorButton>
          ))}
        </AccountColorsContainer>
      </AccountColors>
      <FormSelectGroup
        label="Account type"
        webapp
        name="account"
        options={accountTypes}
        value={formData.account}
        handleChange={(selectedAccount) =>
          setFormData({ ...formData, account: selectedAccount })
        }
        placeholderText="Choose account type:"
      />
      <PrimaryButton>Submit</PrimaryButton>
    </FormContainer>
  )
}

export default NewAccount
