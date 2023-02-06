import React from 'react'

// Redux
import { useSelector, useDispatch } from 'react-redux'
import { signUp, signIn } from '../../features/user/userSlice'

// Routing
import { useNavigate } from 'react-router-dom'

// Components
import FormInputGroup from '../form/FormInputGroup'
import FormSelectGroup from '../form/FormSelectGroup'

// Styled Components
import { TertiaryHeading } from '../../styles/TypographyStyles'
import { AuthFormContainer } from '../../styles/auth/AuthStyles'
import { TextLink, SolidLink } from '../../styles/LinkStyles'

// Icons
import { GoogleIcon, FacebookIcon } from '../../assets/icons/icons'
import { PrimaryButton } from '../../styles/ButtonStyles'

// Currency data
const currency = ['usd', 'eur', 'yuan']

function AuthForm({ isSignIn }) {
  const navigate = useNavigate()
  const { isLoading } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // If sign in
    if (isSignIn) {
      dispatch(signIn({ email: 'anna@contact.com' }))
    }

    // If sign up
    if (!isSignIn) {
      dispatch(signUp({ email: 'anna@contact.com', currency: 'eur' }))
    }

    // navigate('/dashboard')
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
      <SolidLink to="/">
        <GoogleIcon />
        Google
      </SolidLink>
      <SolidLink to="/">
        <FacebookIcon />
        Facebook
      </SolidLink>
      {/* End: Auth options */}
      {/* Start: Email input */}
      <FormInputGroup
        label="Email"
        type="email"
        name="email"
        placeholderText="email@example.com"
      />
      {/* End: Email input */}
      {/* Start: Password input */}
      <FormInputGroup
        label="Password"
        type="password"
        name="password"
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
          placeholderText="Choose currency"
        />
      )}
      {/* End: Currency */}
      {/* Start: Submit button */}
      <PrimaryButton>Submit</PrimaryButton>
      {/* End: Submit button */}
      <span>
        By submitting this form, I confirm that I have read and understood
        <TextLink to="/"> Okane’s privacy policy</TextLink>.
      </span>
    </AuthFormContainer>
  )
}

export default AuthForm
