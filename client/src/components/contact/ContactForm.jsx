import React, { useState } from 'react'

// Components
import FormInputGroup from '../form/FormInputGroup'
import FormCheckGroup from '../form/FormCheckGroup'

// Styled components
import { TertiaryHeading } from '../../styles/TypographyStyles'
import { ContactFormContainer } from '../../styles/contact/ContactStyles'
import { PrimaryButton } from '../../styles/ButtonStyles'
import { TextLink } from '../../styles/LinkStyles'

// Validation
import { validateName, validatePhone } from '../../utils/validation'

function ContactForm() {
  const [errorData, setErrorData] = useState({
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    phoneErr: '',
  })
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    isSubscribed: true,
  })

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Temporary error data variable
    let temporaryErrorData

    // Validate fields
    // Validate first name
    if (formData.firstName === '') {
      temporaryErrorData = {
        ...temporaryErrorData,
        firstNameErr: 'Please enter your first name.',
      }
    } else if (!validateName(formData.firstName)) {
      temporaryErrorData = {
        ...temporaryErrorData,
        firstNameErr: 'Invalid first name given.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        firstNameErr: '',
      }
    }

    // Validate last name
    if (formData.lastName === '') {
      temporaryErrorData = {
        ...temporaryErrorData,
        lastNameErr: 'Please enter your last name.',
      }
    } else if (!validateName(formData.lastName)) {
      temporaryErrorData = {
        ...temporaryErrorData,
        lastNameErr: 'Invalid last name given.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        lastNameErr: '',
      }
    }

    // Validate email
    if (formData.email === '') {
      temporaryErrorData = {
        ...temporaryErrorData,
        emailErr: 'Please enter your email.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        emailErr: '',
      }
    }

    // Validate phone
    if (formData.phone === '') {
      temporaryErrorData = {
        ...temporaryErrorData,
        phoneErr: 'Please enter your phone.',
      }
    } else if (!validatePhone(formData.phone)) {
      temporaryErrorData = {
        ...temporaryErrorData,
        phoneErr: 'Invalid phone number given.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        phoneErr: '',
      }
    }

    setErrorData({ ...errorData, ...temporaryErrorData })

    // If no errors, empty form
    if (
      errorData.emailErr === '' &&
      errorData.lastNameErr === '' &&
      errorData.firstNameErr === '' &&
      errorData.phoneErr === ''
    ) {
      formData.email = ''
      formData.lastName = ''
      formData.firstName = ''
      formData.phone = ''
      formData.isSubscribed = true
    }
  }
  return (
    <ContactFormContainer onSubmit={(e) => handleSubmit(e)}>
      <TertiaryHeading as="h2">Fill in your details</TertiaryHeading>
      {/* Start: First name input */}
      <FormInputGroup
        label="First name"
        type="text"
        name="firstName"
        value={formData.firstName}
        handleChange={(e) =>
          setFormData({ ...formData, firstName: e.currentTarget.value })
        }
        errorMsg={errorData.firstNameErr}
        placeholderText="Your first name"
      />
      {/* End: First name input */}
      {/* Start: Last name input */}
      <FormInputGroup
        label="Last name"
        type="text"
        name="lastName"
        value={formData.lastName}
        handleChange={(e) =>
          setFormData({ ...formData, lastName: e.currentTarget.value })
        }
        errorMsg={errorData.lastNameErr}
        placeholderText="Your last name"
      />
      {/* End: Last name input */}
      {/* Start: Email input */}
      <FormInputGroup
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        handleChange={(e) =>
          setFormData({ ...formData, email: e.currentTarget.value })
        }
        errorMsg={errorData.emailErr}
        placeholderText="email@example.com"
      />
      {/* End: Email input */}
      {/* Start: Phone input */}
      <FormInputGroup
        label="Phone number"
        type="phone"
        name="phone"
        value={formData.phone}
        handleChange={(e) =>
          setFormData({ ...formData, phone: e.currentTarget.value })
        }
        errorMsg={errorData.phoneErr}
        placeholderText="+1 555 5555"
      />
      {/* End: Phone input */}
      {/* Start: Subscription check */}
      <FormCheckGroup
        label="I want receive all the latest news via email."
        name="isSubscribed"
        isChecked={formData.isSubscribed}
        handleChange={() =>
          setFormData({
            ...formData,
            isSubscribed: !formData.isSubscribed,
          })
        }
      />
      {/* End: Subscription check */}
      <PrimaryButton>Submit</PrimaryButton>
      <span>
        By submitting this form, I confirm that I have read and understood
        <TextLink to="/"> Okane’s privacy policy</TextLink>.
      </span>
    </ContactFormContainer>
  )
}

export default ContactForm
