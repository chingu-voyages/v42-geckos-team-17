import React from 'react'

// Components
import { ContactInfo, ContactForm } from '../components'

// Styled components
import { ContactSection, ContactInner } from '../styles/contact/ContactStyles'
import { Container } from '../styles/LayoutStyles'

function Contact() {
  return (
    <ContactSection>
      <Container>
        <ContactInner>
          {/* Start: Promotion / Column 1 */}
          <ContactInfo />
          {/* Start: Contact Form / Column 2 */}
          <ContactForm />
          {/* End: Contact Form / Column 1 */}
        </ContactInner>
      </Container>
    </ContactSection>
  )
}

export default Contact
