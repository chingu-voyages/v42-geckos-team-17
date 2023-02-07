import React, { useState } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Components
import FormInputGroup from '../form/FormInputGroup'
import FormSelectGroup from '../form/FormSelectGroup'

// Styled Components
import {
  ProfileFormContainer,
  ProfileFormInputs,
} from '../../styles/dashboard/profile/ProfileStyles'
import { PrimaryButton } from '../../styles/ButtonStyles'

// User image
import userImg from '../../assets/images/user.png'

// Currency data
const currency = ['usd', 'eur', 'yuan']

function ProfileForm() {
  // Get user data
  const { user } = useSelector((store) => store.user)

  // Form
  const [formData, setFormData] = useState({
    email: user ? user.email : '',
    password: '',
    currency: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <ProfileFormContainer onSubmit={(e) => handleSubmit(e)}>
      <img src={userImg} alt="John Smith" />
      <ProfileFormInputs>
        <FormInputGroup
          webapp
          type="email"
          name="email"
          value={formData.email}
          handleChange={(e) =>
            setFormData({ ...formData, email: e.currentTarget.value })
          }
          placeholderText="Your email"
        />
        <FormInputGroup
          webapp
          type="password"
          name="password"
          placeholderText="********"
        />
        <FormSelectGroup
          webapp
          name="currency"
          options={currency}
          value={formData.currency}
          handleChange={(selectedCurrency) =>
            setFormData({ ...formData, currency: selectedCurrency })
          }
          placeholderText="Choose currency:"
        />
      </ProfileFormInputs>
      <PrimaryButton>Save</PrimaryButton>
    </ProfileFormContainer>
  )
}

export default ProfileForm
