import PricePlanCard from './PricePlanCard'

// Data
import { pricePlaneData } from '../../../assets/data/pricePlansData'

// Styled Components
import {
  PricePlansInner,
  PricePlansSection,
} from '../../../styles/pricing/PricePlansStyles'
import { Container } from '../../../styles/LayoutStyles'

function PricePlans() {
  return (
    <PricePlansSection>
      <Container>
        <PricePlansInner>
          {pricePlaneData.map((obj, index) => (
            <PricePlanCard
              key={`price-plan-card-${index}`}
              type={obj.type}
              description={obj.description}
              price={obj.price}
              features={obj.features}
            />
          ))}
        </PricePlansInner>
      </Container>
    </PricePlansSection>
  )
}

export default PricePlans
