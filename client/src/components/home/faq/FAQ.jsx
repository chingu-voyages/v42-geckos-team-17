// Styled components
import {
  Container,
  SectionHeadingContainer,
} from '../../../styles/LayoutStyles'
import { SecondaryHeading, Paragraph } from '../../../styles/TypographyStyles'
import { FAQGrid, FAQInner, FAQSection } from '../../../styles/home/FAQStyles'

// Components
import FAQBlock from './FAQBlock'

// Data
import { faqData } from '../../../assets/data/faqData'

function FAQ() {
  return (
    <FAQSection>
      <Container>
        <FAQInner>
          {/* Start: Section heading */}
          <SectionHeadingContainer center>
            <SecondaryHeading>Frequently asked questions</SecondaryHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </SectionHeadingContainer>
          {/* End: Section heading */}
          {/* Start: FAQ block */}
          <FAQGrid>
            {faqData.map((obj, index) => (
              <FAQBlock
                key={`faq-block-${index}`}
                question={obj.question}
                answer={obj.answer}
              />
            ))}
          </FAQGrid>
          {/* End: FAQ block */}
        </FAQInner>
      </Container>
    </FAQSection>
  )
}

export default FAQ
