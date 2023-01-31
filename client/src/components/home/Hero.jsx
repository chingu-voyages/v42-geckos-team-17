import React from 'react'

// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import { PrimaryButton } from '../../styles/ButtonStyles'
import { HeroSection, HeroInner } from '../../styles/home/HeroStyles'
import { PrimaryHeading, Paragraph } from '../../styles/TypographyStyles'

function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <SectionHeadingContainer center>
            <PrimaryHeading>Track. Earn. Save.</PrimaryHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </SectionHeadingContainer>
          <PrimaryButton>Start free trial</PrimaryButton>
        </HeroInner>
      </Container>
    </HeroSection>
  )
}

export default Hero
