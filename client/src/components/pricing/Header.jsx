// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  SecondaryHeading,
  TertiaryHeading,
} from '../../styles/TypographyStyles'
import { HeaderSection } from '../../styles/pricing/HeaderStyles'

function Header() {
  return (
    <HeaderSection>
      <Container>
        <SectionHeadingContainer>
          <SecondaryHeading as="h1">
            Teams of all sizes create predictably better content with Okane.
          </SecondaryHeading>
          <TertiaryHeading as="span">
            Pick a plan that fits your needs. We scale up with you.
          </TertiaryHeading>
        </SectionHeadingContainer>
      </Container>
    </HeaderSection>
  )
}

export default Header
