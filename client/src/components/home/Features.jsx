// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  SecondaryHeading,
  TertiaryHeading,
  Paragraph,
} from '../../styles/TypographyStyles'
import {
  FeaturesSection,
  FeaturesInner,
  FeaturesGrid,
  GridDiv,
} from '../../styles/home/FeaturesStyles'

// Icons
import { RoundIcon } from '../../assets/icons/icons'

function Features() {
  return (
    <FeaturesSection>
      <Container>
        <FeaturesInner>
          {/* Start: Section heading */}
          <SectionHeadingContainer>
            <SecondaryHeading>Our Best Features</SecondaryHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna incididunt
              dolor aliqua.
            </Paragraph>
          </SectionHeadingContainer>
          {/* End: Section heading */}
          {/* Start: Features */}
          <FeaturesGrid>
            <GridDiv>
              <RoundIcon />
              <TertiaryHeading>Bank Integration</TertiaryHeading>
            </GridDiv>
            <GridDiv>
              <RoundIcon />
              <TertiaryHeading>Security</TertiaryHeading>
            </GridDiv>
            <GridDiv>
              <RoundIcon />
              <TertiaryHeading>Tracking</TertiaryHeading>
            </GridDiv>
            <GridDiv>
              <RoundIcon />
              <TertiaryHeading>24/7 Support</TertiaryHeading>
            </GridDiv>
            <GridDiv>
              <RoundIcon />
              <TertiaryHeading>Budgeting</TertiaryHeading>
            </GridDiv>
            <GridDiv>
              <RoundIcon />
              <TertiaryHeading>Statistics</TertiaryHeading>
            </GridDiv>
          </FeaturesGrid>
          {/* End: Features */}
        </FeaturesInner>
      </Container>
    </FeaturesSection>
  )
}

export default Features
