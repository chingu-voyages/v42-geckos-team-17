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
            Okane offers a variety of plans to meet your needs.
          </SecondaryHeading>
          <TertiaryHeading as="span">
            As a Okane member, you are charged monthly on the date you signed
            up.
          </TertiaryHeading>
        </SectionHeadingContainer>
      </Container>
    </HeaderSection>
  )
}

export default Header
