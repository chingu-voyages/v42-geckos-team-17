import React from 'react'

// Routing
import { Link } from 'react-router-dom'

// Styled components
import { TextLink, OutlineLink } from '../../styles/LinkStyles'
import { IconButton } from '../../styles/ButtonStyles'
import {
  Navigation,
  NavigationLinks,
} from '../../styles/sharedLayout/HeaderNavStyles'

// Icons
import Logo from '../../assets/logo'
import { HamburgerIcon } from '../../assets/icons/icons'

function HeaderNav() {
  return (
    <header>
      <Navigation>
        <Link to="/" aria-label="okane home page">
          <Logo />
        </Link>
        <NavigationLinks>
          <li>
            <TextLink to="/">About</TextLink>
          </li>
          <li>
            <TextLink to="/">Pricing</TextLink>
          </li>
          <li>
            <TextLink to="/">Contact</TextLink>
          </li>
        </NavigationLinks>
        <OutlineLink to="/">Sign In</OutlineLink>
        <IconButton type="button" aria-label="navigation">
          <HamburgerIcon aria-hidden="true" />
        </IconButton>
      </Navigation>
    </header>
  )
}

export default HeaderNav
