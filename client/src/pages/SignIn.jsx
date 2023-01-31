import React from 'react'

// Styled Components
import { Container } from '../styles/LayoutStyles'
import {
  AuthWrapperContainer,
  AuthInner,
  AuthImage,
} from '../styles/auth/AuthStyles'

// Components
import { AuthForm } from '../components'

// Images
import Image from '../assets/images/sign_in_image.svg'

function SignIn() {
  return (
    <AuthWrapperContainer>
      <Container>
        <AuthInner>
          <AuthForm isSignIn />
          <AuthImage src={Image} alt="" />
        </AuthInner>
      </Container>
    </AuthWrapperContainer>
  )
}

export default SignIn
