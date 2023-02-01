import React from 'react'

// Styled components
import { IconLink } from '../../../styles/LinkStyles'
import {
  BottomMobileNavContainer,
  Navigation,
  AddButton,
} from '../../../styles/dashboard/MobileNavStyles'

// Icons
import {
  HomeIcon,
  AccountsIcon,
  TransactionIcon,
  StatsIcon,
  PlusIcon,
} from '../../../assets/icons/dashboardIcons'

function BottomMobileNav() {
  return (
    <BottomMobileNavContainer>
      {/* Start: Nav Links */}
      <Navigation>
        <li>
          <IconLink to="/">
            <HomeIcon />
          </IconLink>
        </li>
        <li>
          <IconLink to="/">
            <AccountsIcon />
          </IconLink>
        </li>
        <li>
          <IconLink to="/">
            <TransactionIcon />
          </IconLink>
        </li>
        <li>
          <IconLink to="/">
            <StatsIcon />
          </IconLink>
        </li>
      </Navigation>
      {/* End: Nav Links */}
      {/* Start: Add button */}
      <AddButton aria-label="add new">
        <PlusIcon />
      </AddButton>
      {/* End: Add button */}
    </BottomMobileNavContainer>
  )
}

export default BottomMobileNav
