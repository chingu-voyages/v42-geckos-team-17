import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Styled Components
import { IconLink } from '../../../styles/LinkStyles'
import {
  TopMobileNavContainer,
  TopMobileNavInner,
} from '../../../styles/dashboard/MobileNavStyles'

// Icons
import { OkaneMiniIcon } from '../../../assets/icons/dashboardIcons'

// Images
import userImg from '../../../assets/images/user.jpg'

function TopMobileNav() {
  return (
    <TopMobileNavContainer>
      <TopMobileNavInner>
        {/* Start: Logo */}
        <Link to="/" aria-label="okane home page">
          <OkaneMiniIcon />
        </Link>
        {/* End: Logo */}
        <IconLink to="profile" aria-label="user account">
          <img src={userImg} alt="User Name" />
        </IconLink>
        {/* End: User Link */}
      </TopMobileNavInner>
    </TopMobileNavContainer>
  )
}

export default TopMobileNav
