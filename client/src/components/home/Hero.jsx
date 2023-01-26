import React from 'react'

// Styled Components
import { Container } from '../../styles/LayoutStyles'
import { PrimaryButton } from '../../styles/ButtonStyles'
import { HeroSection, HeroInner } from '../../styles/home/HeroStyles'

function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <h1>Track. Earn. Save.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <PrimaryButton>Start free trial</PrimaryButton>
        </HeroInner>
      </Container>
    </HeroSection>
  )
}

export default Hero
