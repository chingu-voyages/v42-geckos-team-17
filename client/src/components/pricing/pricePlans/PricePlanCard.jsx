import { RightIcon } from '../../../assets/icons/icons'

// Styled Components
import { PrimaryButton } from '../../../styles/ButtonStyles'
import { Paragraph, SecondaryHeading } from '../../../styles/TypographyStyles'
import {
  CardHeaderDiv,
  CardBodyDiv,
  PricePlanCardDiv,
  CardFooterDiv,
  BestValueDiv,
} from '../../../styles/pricing/PricePlansStyles'

function PricePlanCard({ type, description, price, features }) {
  return (
    <PricePlanCardDiv>
      {type === 'Pro' && <BestValueDiv>Best Value</BestValueDiv>}
      {/* Start: Card heading */}
      <CardHeaderDiv>
        <SecondaryHeading>{type}</SecondaryHeading>
        <Paragraph>{description}</Paragraph>
      </CardHeaderDiv>
      {/* End: Card heading */}
      {/* Start: Card body */}
      <CardBodyDiv>
        <SecondaryHeading as="span"> {price}</SecondaryHeading>
        <Paragraph>
          per month <br />
          billed monthly
        </Paragraph>
        <PrimaryButton>Select</PrimaryButton>
        {type === 'Pro' && <Paragraph>Try it free for 7 days!</Paragraph>}
      </CardBodyDiv>
      {/* End: Card body */}
      {/* Start: Card footer */}
      <CardFooterDiv>
        {features.map((feature, index) => (
          <div key={`feature-${index}`}>
            <RightIcon />
            <span> {feature}</span>
          </div>
        ))}
      </CardFooterDiv>
      {/* End: Card footer */}
    </PricePlanCardDiv>
  )
}
export default PricePlanCard
