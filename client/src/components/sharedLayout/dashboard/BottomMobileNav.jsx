import React from 'react'

// Styled components
import { IconLink } from '../../../styles/LinkStyles'
import {
  BottomMobileNavContainer,
  Navigation,
  AddButton,
} from '../../../styles/dashboard/MobileNavStyles'

// Icons
import { PlusIcon } from '../../../assets/icons/dashboardIcons'

// Links data
import dashboardLinks from '../../../assets/links/dashboard'

function BottomMobileNav({ page, modalHandler }) {
  return (
    <BottomMobileNavContainer>
      {/* Start: Nav Links */}
      <Navigation>
        {dashboardLinks.map((link) => (
          <li key={link.name}>
            <IconLink to={link.href}>{link.icon}</IconLink>
          </li>
        ))}
      </Navigation>
      {/* End: Nav Links */}
      {/* Start: Add button */}
      <AddButton onClick={() => modalHandler(page.type)} aria-label="add new">
        <PlusIcon />
      </AddButton>
      {/* End: Add button */}
    </BottomMobileNavContainer>
  )
}

export default BottomMobileNav
