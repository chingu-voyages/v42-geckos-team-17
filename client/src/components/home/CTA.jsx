import React from 'react'

// Styled components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import { TertiaryHeading } from '../../styles/TypographyStyles'
import { SecondaryLink } from '../../styles/LinkStyles'
import { CTAInner, CTASection, GroupButtons } from '../../styles/home/CTAStyles'

function CTA() {
  return (
    <CTASection>
      <Container>
        <CTAInner>
          <SectionHeadingContainer>
            <TertiaryHeading>Ready to get started?</TertiaryHeading>
            <TertiaryHeading>Sign up or contact us</TertiaryHeading>
          </SectionHeadingContainer>
          <GroupButtons>
            <SecondaryLink to="contact">Start free trial</SecondaryLink>
            <SecondaryLink to="contact">Contact Us</SecondaryLink>
          </GroupButtons>
        </CTAInner>
      </Container>
    </CTASection>
  )
}

export default CTA
