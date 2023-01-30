import React from 'react'
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  CTAButton,
  CTAInner,
  CTASection,
  CTATertiaryHeadingDark,
  CTATertiaryHeadingLight,
 GroupButtons } from '../../styles/home/CTAStyles'

function CTA() {
  return (
    <CTASection>
      <Container>
        <CTAInner>
          <SectionHeadingContainer>
            <CTATertiaryHeadingDark>
              Ready to get started?
            </CTATertiaryHeadingDark>
            <CTATertiaryHeadingLight>
              Sign up or contact us
            </CTATertiaryHeadingLight>
          </SectionHeadingContainer>
          <GroupButtons>
            <CTAButton>Start free trial</CTAButton>
            <CTAButton>Contact Us</CTAButton>
          </GroupButtons>
        </CTAInner>
      </Container>
    </CTASection>
  )
}

export default CTA
