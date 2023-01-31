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
import Image from '../assets/images/sign_up_image.svg'

function SignUp() {
  return (
    <AuthWrapperContainer>
      <Container>
        <AuthInner>
          <AuthForm isSignIn={false} />
          <AuthImage src={Image} alt="" />
        </AuthInner>
      </Container>
    </AuthWrapperContainer>
  )
}

export default SignUp
