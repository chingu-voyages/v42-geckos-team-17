import React from 'react'

// Styled components
import { HeroHeaderContainer } from '../../../styles/dashboard/HeroHeaderStyles'
import { PrimaryHeading } from '../../../styles/TypographyStyles'
import { PrimaryButton } from '../../../styles/ButtonStyles'

function HeroHeader({ page, modalHandler }) {
  return (
    <HeroHeaderContainer>
      <PrimaryHeading app>{page.title}</PrimaryHeading>
      {page.type && (
        <PrimaryButton onClick={() => modalHandler(page.type)}>
          Add new
        </PrimaryButton>
      )}
    </HeroHeaderContainer>
  )
}

export default HeroHeader