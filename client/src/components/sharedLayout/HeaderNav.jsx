import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Styled components
import { TextLink, OutlineLink } from '../../styles/LinkStyles'
import { IconButton } from '../../styles/ButtonStyles'
import {
  NavHeader,
  Navigation,
  NavigationLinks,
} from '../../styles/sharedLayout/HeaderNavStyles'

// Icons
import Logo from '../../assets/logo'
import { HamburgerIcon } from '../../assets/icons/icons'

function HeaderNav() {
  return (
    <NavHeader>
      <Navigation>
        <Link to="/" aria-label="okane home page">
          <Logo />
        </Link>
        <NavigationLinks>
          <li>
            <TextLink to="/about">About</TextLink>
          </li>
          <li>
            <TextLink to="/">Pricing</TextLink>
          </li>
          <li>
            <TextLink to="/contact">Contact</TextLink>
          </li>
        </NavigationLinks>
        <OutlineLink to="signin">Sign In</OutlineLink>
        <IconButton type="button" aria-label="navigation">
          <HamburgerIcon aria-hidden="true" />
        </IconButton>
      </Navigation>
    </NavHeader>
  )
}

export default HeaderNav
