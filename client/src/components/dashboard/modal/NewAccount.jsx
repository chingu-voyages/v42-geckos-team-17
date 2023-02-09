import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../features/modal/ModalSlice'

// Components
import FormInputGroup from '../../form/FormInputGroup'
import FormSelectGroup from '../../form/FormSelectGroup'

// Styled components
import { PrimaryHeading } from '../../../styles/TypographyStyles'
import {
  Overlay,
  ModalContainer,
  FormContainer,
  CardContainer,
  AccountColors,
  AccountColorsContainer,
  AccountColorButton,
} from '../../../styles/dashboard/ModalStyles'
import { PrimaryButton, IconButton } from '../../../styles/ButtonStyles'

// Icon
import { CloseIcon } from '../../../assets/icons/icons'

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
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return ReactDOM.createPortal(
    <Overlay>
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
        <PrimaryHeading app>Add new account</PrimaryHeading>
        {/* End: Heading */}
        {/* Start: Form */}
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
        {/* End: Form */}
      </ModalContainer>
    </Overlay>,
    document.getElementById('portal')
  )
}

export default NewAccount
