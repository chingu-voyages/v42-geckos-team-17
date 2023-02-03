import TestimonialCard from './TestimonialCard'
import { TestimonialsData } from '../../../assets/data/TestimonialData'

// Styled Components
import { SecondaryHeading } from '../../../styles/TypographyStyles'
import {
  Container,
  SectionHeadingContainer,
} from '../../../styles/LayoutStyles'
import {
  TestimonialsInner,
  TestimonialsSection,
  TestimonialsGrid,
} from '../../../styles/pricing/TestimonialsStyles'

function Testimonials() {
  return (
    <TestimonialsSection>
      <Container>
        <TestimonialsInner>
          {/* Start: Section heading */}
          <SectionHeadingContainer center>
            <SecondaryHeading>What People Say About Okane</SecondaryHeading>
          </SectionHeadingContainer>
          {/* End: Section heading */}
          {/* Start: Testimonials block */}
          <TestimonialsGrid>
            {TestimonialsData.map((obj, index) => (
              <TestimonialCard
                key={`testimonial-card-${index}`}
                name={obj.name}
                position={obj.position}
                company={obj.company}
                testimonial={obj.testimonial}
              />
            ))}
          </TestimonialsGrid>
          {/* End: Testimonials block */}
        </TestimonialsInner>
      </Container>
    </TestimonialsSection>
  )
}

export default Testimonials
