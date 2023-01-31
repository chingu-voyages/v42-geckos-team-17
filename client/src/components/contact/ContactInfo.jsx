import React from 'react'

// Styled components
import { SectionHeadingContainer } from '../../styles/LayoutStyles'
import { Paragraph, SecondaryHeading } from '../../styles/TypographyStyles'
import {
  ContactPromotion,
  ContactPromotionList,
} from '../../styles/contact/ContactStyles'

// Icons
import { CheckIcon } from '../../assets/icons/icons'

// Promotion data
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

function ContactInfo() {
  return (
    <ContactPromotion>
      <SectionHeadingContainer>
        <SecondaryHeading>
          Are you ready to achieve your budget goals?
        </SecondaryHeading>
        <Paragraph>
          Okane App tracks your net worth and gives you the option to not link
          your accounts and instead track your finances manually.
        </Paragraph>
      </SectionHeadingContainer>
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
  )
}

export default ContactInfo
