// Styled Components
import { Container } from '../../styles/LayoutStyles'
import {
  FeaturesSection,
  FeaturesInner,
  FeaturesGrid,
  GridDiv,
} from '../../styles/home/FeaturesStyles'
import { RoundIcon } from '../../assets/icons/icons'

function Features() {
  return (
    <FeaturesSection>
      <Container>
        <FeaturesInner>
          <h1>Our Best Features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna incididunt dolor
            aliqua.
          </p>
          <FeaturesGrid>
            <GridDiv>
              <RoundIcon />
              <p>Bank Integration</p>
            </GridDiv>
            <GridDiv>
              <RoundIcon />
              <p>Security</p>
            </GridDiv>
            <GridDiv>
              <RoundIcon />

              <p>Tracking</p>
            </GridDiv>
            <GridDiv>
              <RoundIcon />

              <p>24/7 Support</p>
            </GridDiv>
            <GridDiv>
              <RoundIcon />

              <p>Budgeting</p>
            </GridDiv>

            <GridDiv>
              <RoundIcon />

              <p>Statistics</p>
            </GridDiv>
          </FeaturesGrid>
        </FeaturesInner>
      </Container>
    </FeaturesSection>
  )
}

export default Features
