import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Styled Components
import { IconLink } from '../../../styles/LinkStyles'
import { IconButton } from '../../../styles/ButtonStyles'
import {
  VerticalNavContainer,
  VerticalNavInner,
  Navigation,
  VerticalNavInnerFooter,
} from '../../../styles/dashboard/VerticalNavStyles'

// Icons
import {
  OkaneMiniIcon,
  HomeIcon,
  AccountsIcon,
  TransactionIcon,
  StatsIcon,
  LightIcon,
} from '../../../assets/icons/dashboardIcons'

// Images
import userImg from '../../../assets/images/user.png'

function VerticalNav() {
  return (
    <VerticalNavContainer>
      <VerticalNavInner>
        {/* Start: Logo */}
        <Link to="/" aria-label="okane home page">
          <OkaneMiniIcon />
        </Link>
        {/* End: Logo */}
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
        <VerticalNavInnerFooter>
          {/* Start: Theme Switcher */}
          <IconButton aria-label="theme swither">
            <LightIcon />
          </IconButton>
          {/* End: Theme Switcher */}
          {/* Start: User Link */}
          <IconLink to="/" aria-label="user account">
            <img src={userImg} alt="User Name" />
          </IconLink>
          {/* End: User Link */}
        </VerticalNavInnerFooter>
      </VerticalNavInner>
    </VerticalNavContainer>
  )
}

export default VerticalNav
