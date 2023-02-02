// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  SecondaryHeading,
  TertiaryHeading,
} from '../../styles/TypographyStyles'
import { HeaderSection } from '../../styles/pricing/HeaderStyle'

function Header() {
  return (
    <HeaderSection>
      <Container>
        <SectionHeadingContainer>
          <SecondaryHeading>
            Teams of all sizes create predictably better content with Okane.
          </SecondaryHeading>
          <TertiaryHeading>
            Pick a plan that fits your needs. We scale up with you.
          </TertiaryHeading>
        </SectionHeadingContainer>
      </Container>
    </HeaderSection>
  )
}

export default Header
