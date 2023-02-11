import React from 'react'

// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import { SecondaryButton } from '../../styles/ButtonStyles'
import { HeroSection, HeroInner } from '../../styles/home/HeroStyles'
import { PrimaryHeading, Paragraph } from '../../styles/TypographyStyles'

function Hero() {
  return (
    <HeroSection>
      <Container>
        <HeroInner>
          <SectionHeadingContainer center>
            <PrimaryHeading>
              <span>Track.</span> Earn. Save.
            </PrimaryHeading>
            <Paragraph>
              Tracking your spending is often the first step in getting your
              finances in order.
            </Paragraph>
          </SectionHeadingContainer>
          <SecondaryButton>Start free trial</SecondaryButton>
        </HeroInner>
      </Container>
    </HeroSection>
  )
}

export default Hero
