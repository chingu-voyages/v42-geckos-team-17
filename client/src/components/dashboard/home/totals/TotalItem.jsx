import React from 'react'

// Styled components
import {
  TotalItemContainer,
  TotalAmount,
} from '../../../../styles/dashboard/home/TotalsStyles'
import { TertiaryHeading } from '../../../../styles/TypographyStyles'

const TotalItem = ({ title, amount }) => {
  return (
    <TotalItemContainer>
      <TertiaryHeading app>{title}</TertiaryHeading>
      <TotalAmount>{amount}$</TotalAmount>
    </TotalItemContainer>
  )
}

export default TotalItem
