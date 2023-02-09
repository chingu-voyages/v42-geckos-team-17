import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { closeModal, setType } from '../../../features/modal/ModalSlice'

// Data
import categories from '../../../assets/data/dashboard/categoriesData'

// Components
import FormInputGroup from '../../form/FormInputGroup'
import FormSelectGroup from '../../form/FormSelectGroup'

// Styled components
import { PrimaryHeading } from '../../../styles/TypographyStyles'
import {
  Overlay,
  ModalContainer,
  ButtonsContainer,
  FormContainer,
} from '../../../styles/dashboard/ModalStyles'
import {
  PrimaryButton,
  SecondaryButton,
  IconButton,
} from '../../../styles/ButtonStyles'

// Icon
import { CloseIcon } from '../../../assets/icons/icons'

const NewTransaction = ({ formData, setFormData }) => {
  const dispatch = useDispatch()
  const { type } = useSelector((store) => store.modal)
  const { accounts } = useSelector((store) => store.account)

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
        <PrimaryHeading app>Add new transaction</PrimaryHeading>
        {/* End: Heading */}
        {/* Start: Buttons */}
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
        {/* End: Buttons */}
        {/* Start: Form */}
        <FormContainer onSubmit={(e) => handleSubmit(e)}>
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
          {type === 'expense' && (
            <FormSelectGroup
              webapp
              name="category"
              options={categories.map((category) => category.name)}
              value={formData.category}
              handleChange={(selectedCategory) =>
                setFormData({ ...formData, category: selectedCategory })
              }
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
            placeholderText="Choose account:"
          />
          <PrimaryButton>Submit</PrimaryButton>
        </FormContainer>
        {/* End: Form */}
      </ModalContainer>
    </Overlay>,
    document.getElementById('portal')
  )
}

export default NewTransaction
