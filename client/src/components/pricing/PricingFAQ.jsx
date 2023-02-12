import FAQBlock from '../home/faq/FAQBlock'

// Styled Components
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  PricingFAQGrid,
  PricingFAQInner,
  PricingFAQSection,
} from '../../styles/pricing/PricingFAQStyles'
import { Paragraph, SecondaryHeading } from '../../styles/TypographyStyles'

// Data
import { pricingFaqData } from '../../assets/data/pricingFaqData'

function PricingFAQ() {
  return (
    <PricingFAQSection>
      <Container>
        <PricingFAQInner>
          {/* Start: Section heading */}
          <SectionHeadingContainer center>
            <SecondaryHeading>Plans & Billing FAQs:</SecondaryHeading>
            <Paragraph>
              Making—and sticking to—a monthly budget can be critical to your
              financial success.
            </Paragraph>
          </SectionHeadingContainer>
          {/* End: Section heading */}
          {/* Start: FAQ block */}
          <PricingFAQGrid>
            {pricingFaqData.map((obj, index) => (
              <FAQBlock
                key={`faq-block-${index}`}
                question={obj.question}
                answer={obj.answer}
              />
            ))}
          </PricingFAQGrid>
          {/* End: FAQ block */}
        </PricingFAQInner>
      </Container>
    </PricingFAQSection>
  )
}

export default PricingFAQ
