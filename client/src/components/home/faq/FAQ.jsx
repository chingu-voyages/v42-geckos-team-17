import { Container } from '../../../styles/LayoutStyles'
import { FAQGrid, FAQInner, FAQSection } from '../../../styles/home/FAQStyles'
import { faqData } from '../../../assets/data/faqData'
import FAQBlock from './FAQBlock'

function FAQ() {
  return (
    <FAQSection>
      <Container>
        <FAQInner>
          <h1>Frequently asked questions</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <FAQGrid>
            {faqData.map((obj, index) => (
              <FAQBlock
                key={`faq-block-${index}`}
                question={obj.question}
                answer={obj.answer}
              />
            ))}
          </FAQGrid>
        </FAQInner>
      </Container>
    </FAQSection>
  )
}

export default FAQ
