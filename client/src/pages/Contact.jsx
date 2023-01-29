import React from 'react'

// Components
import { FormInputGroup, FormCheckGroup } from '../components'

// Styled components
import {
  ContactSection,
  ContactInner,
  ContactPromotion,
  ContactPromotionList,
  ContactForm,
} from '../styles/contact/ContactStyles'
import { Container } from '../styles/LayoutStyles'
import { PrimaryButton } from '../styles/ButtonStyles'
import { TextLink } from '../styles/LinkStyles'

// Icons
import { CheckIcon } from '../assets/icons/icons'

// Promotion ata
const promoData = [
  {
    id: '0',
    title: 'User Friendly Budgeting.',
    description:
      ' Our app is easy to use and it gives you an accurate picture of how much money you have available for spending each month.',
  },
  {
    id: '1',
    title: 'Save Time on Number Crunching.',
    description:
      ' Our app is easy to use and it gives you an accurate picture of how much money you have available for spending each month.',
  },
  {
    id: '2',
    title: 'Analyzes your spending habits.',
    description:
      ' You can easily identify where you’re overspending, and how you can bring your spending back into alignment with your values and goals.',
  },
]

function Contact() {
  return (
    <ContactSection>
      <Container>
        <ContactInner>
          {/* Start: Promotion / Column 1 */}
          <ContactPromotion>
            <h2>Are you ready to achieve your budget goals?</h2>
            <p>
              Okane App tracks your net worth and gives you the option to not
              link your accounts and instead track your finances manually.
            </p>
            <ContactPromotionList>
              {promoData.map((promoItem) => (
                <li key={promoItem.id}>
                  <CheckIcon />
                  <div>
                    <span>{promoItem.title}</span>
                    {promoItem.description}
                  </div>
                </li>
              ))}
            </ContactPromotionList>
          </ContactPromotion>
          {/* End: Promotion / Column 1 */}
          {/* Start: Contact Form / Column 2 */}
          <ContactForm>
            <h3>Fill in your details</h3>
            <FormInputGroup
              label="First name"
              type="text"
              name="firstName"
              placeholderText="Your first name"
            />
            <FormInputGroup
              label="Last name"
              type="text"
              name="lastName"
              placeholderText="Your last name"
            />
            <FormInputGroup
              label="Email"
              type="email"
              name="email"
              placeholderText="email@example.com"
            />
            <FormInputGroup
              label="Phone number"
              type="phone"
              name="phone"
              placeholderText="+1 555 5555"
            />
            <FormCheckGroup
              label="I want to receive occasional, practical content for business owners via email."
              name="isSubscribed"
            />
            <PrimaryButton>Submit</PrimaryButton>
            <span>
              By submitting this form, I confirm that I have read and understood
              <TextLink to="/"> Okane’s privacy policy</TextLink>.
            </span>
          </ContactForm>
          {/* End: Contact Form / Column 1 */}
        </ContactInner>
      </Container>
    </ContactSection>
  )
}

export default Contact
