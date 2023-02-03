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
      <TestimonialsCardBody>
        <Paragraph>&quot; {testimonial} &quot;</Paragraph>
      </TestimonialsCardBody>
      <TestimonialCardFooter>
        <Paragraph>
          <span>{name}</span>
          <br />
          <span>{position}</span>,<br />
          <span>{company}</span>
        </Paragraph>
      </TestimonialCardFooter>
    </TestimonialsCardDiv>
  )
}

export default TestimonialCard
