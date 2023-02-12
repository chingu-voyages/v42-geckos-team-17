import React from 'react'

// Styled Components
import { ErrorContainer, ErrorInner } from '../styles/error/ErrorStyles'
import { Container, SectionHeadingContainer } from '../styles/LayoutStyles'
import { SecondaryHeading } from '../styles/TypographyStyles'
import { SecondaryLink } from '../styles/LinkStyles'

// Image
import errorImg from '../assets/images/error.svg'

const Error = () => {
  return (
    <ErrorContainer>
      <Container>
        <ErrorInner>
          <SectionHeadingContainer center>
            <SecondaryHeading as="h1">
              404! The page doesn't exist.
            </SecondaryHeading>
          </SectionHeadingContainer>
          <SecondaryLink to="/">Go to home page</SecondaryLink>
          <img src={errorImg} alt="" />
        </ErrorInner>
      </Container>
    </ErrorContainer>
  )
}

export default Error
