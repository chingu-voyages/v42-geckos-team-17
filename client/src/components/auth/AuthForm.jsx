/* eslint-disable consistent-return */
import React, { useState } from 'react'

// Redux
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp, signIn } from '../../features/user/userSlice'

// Components
import FormInputGroup from '../form/FormInputGroup'
import FormSelectGroup from '../form/FormSelectGroup'

// Styled Components
import { TertiaryHeading } from '../../styles/TypographyStyles'
import { AuthFormContainer } from '../../styles/auth/AuthStyles'
import { TextLink, PrimaryLink, SecondaryLink } from '../../styles/LinkStyles'

// Icons
import { GoogleIcon, FacebookIcon } from '../../assets/icons/icons'
import { PrimaryButton } from '../../styles/ButtonStyles'

// Currency data
const currency = ['usd', 'eur', 'yuan']

function AuthForm({ isSignIn }) {
  // Routing
  const navigate = useNavigate()

  // Redux
  const dispatch = useDispatch()

  // Loading (Simulate loading)
  const [isLoading, setIsLoading] = useState(false)

  // Error
  const [errorData, setErrorData] = useState({
    emailErr: '',
    passwordErr: '',
    currencyErr: '',
  })

  // Form
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    currency: '',
  })

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // Temporary error data variable
    let temporaryErrorData = errorData

    /// /////////////////////////////////
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

    // Validate password
    if (formData.password === '') {
      temporaryErrorData = {
        ...temporaryErrorData,
        passwordErr: 'Please enter your password.',
      }
    } else {
      temporaryErrorData = {
        ...temporaryErrorData,
        passwordErr: '',
      }
    }

    // Validate currency
    if (!isSignIn) {
      if (
        formData.currency === '' ||
        formData.currency === 'Choose currency:'
      ) {
        temporaryErrorData = {
          ...temporaryErrorData,
          currencyErr: 'Please choose currency.',
        }
      } else {
        temporaryErrorData = {
          ...temporaryErrorData,
          currencyErr: '',
        }
      }
    }

    setErrorData({ ...errorData, ...temporaryErrorData })

    /// /////////////////////////////////
    // If no errors
    if (
      temporaryErrorData.emailErr === '' &&
      temporaryErrorData.passwordErr === '' &&
      temporaryErrorData.currencyErr === ''
    ) {
      // If sign in
      if (isSignIn) {
        dispatch(signIn({ email: formData.email }))
      }

      // If sign up
      if (!isSignIn) {
        dispatch(signUp({ email: formData.email, currency: formData.currency }))
      }

      // Simulate loading
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        navigate('/dashboard/home')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }

  return (
    <AuthFormContainer onSubmit={(e) => handleSubmit(e)}>
      {/* Start: Form header */}
      <TertiaryHeading as="h1">
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </TertiaryHeading>
      <TextLink to={`${isSignIn ? '/signup' : '/signin'}`}>
        {isSignIn ? 'No Account? Sign up' : 'Have Account? Sign in'}
      </TextLink>
      {/* End: Form header */}
      {/* Start: Auth options */}
      <SecondaryLink to="/">
        <GoogleIcon />
        Google
      </SecondaryLink>
      <SecondaryLink to="/">
        <FacebookIcon />
        Facebook
      </SecondaryLink>
      <PrimaryLink to="/dashboard/home">Sign in as a guest</PrimaryLink>
      {/* End: Auth options */}
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
      {/* Start: Password input */}
      <FormInputGroup
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        handleChange={(e) =>
          setFormData({ ...formData, password: e.currentTarget.value })
        }
        errorMsg={errorData.passwordErr}
        placeholderText="********"
      />
      {/* End: Password input */}
      {/* Start: Forgot password link */}
      {isSignIn && <TextLink to="/">Forgot password?</TextLink>}
      {/* End: Forgot password link */}
      {/* Start: Currency */}
      {!isSignIn && (
        <FormSelectGroup
          label="Currency"
          name="currency"
          options={currency}
          placeholderText="Choose currency:"
          value={formData.currency}
          handleChange={(selectedCurrency) =>
            setFormData({ ...formData, currency: selectedCurrency })
          }
          errorMsg={errorData.currencyErr}
        />
      )}
      {/* End: Currency */}
      {/* Start: Submit button */}
      <PrimaryButton>{isLoading ? 'Loading...' : 'Submit'}</PrimaryButton>
      {/* End: Submit button */}
      <span>
        By submitting this form, I confirm that I have read and understood
        <TextLink to="/"> Okane’s privacy policy</TextLink>.
      </span>
    </AuthFormContainer>
  )
}

export default AuthForm
