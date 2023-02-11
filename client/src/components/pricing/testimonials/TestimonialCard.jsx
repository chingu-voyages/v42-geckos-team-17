// Styled Components
import {
  TestimonialsCardDiv,
  TestimonialsCardBody,
  TestimonialCardFooter,
} from '../../../styles/pricing/TestimonialsStyles'
import { Paragraph } from '../../../styles/TypographyStyles'

function TestimonialCard({ name, position, company, testimonial }) {
  return (
    <TestimonialsCardDiv>
      {/* Start: Card body */}
      <TestimonialsCardBody>
        <Paragraph>&quot;{testimonial}&quot;</Paragraph>
      </TestimonialsCardBody>
      {/* End: Card body */}
      {/* Start: Card footer */}
      <TestimonialCardFooter>
        <Paragraph>
          <span>{name}</span>
          <br />
          <span>{position}</span>,<br />
          <span>{company}</span>
        </Paragraph>
      </TestimonialCardFooter>
      {/* End: Card footer */}
    </TestimonialsCardDiv>
  )
}

export default TestimonialCard
