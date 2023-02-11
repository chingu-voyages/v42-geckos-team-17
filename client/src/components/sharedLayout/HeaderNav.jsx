import React, { useState, useEffect } from 'react'

// Redux
import { useSelector } from 'react-redux'

// Routing
import { Link } from 'react-router-dom'

// Components
import MobileNav from './MobileNav'

// Styled components
import { TextLink, PrimaryLink } from '../../styles/LinkStyles'
import { IconButton } from '../../styles/ButtonStyles'
import {
  NavHeader,
  Navigation,
  NavigationLinks,
} from '../../styles/sharedLayout/HeaderNavStyles'

// Icons
import Logo from '../../assets/logo'
import { HamburgerIcon, CloseIcon } from '../../assets/icons/icons'

// Links data
import { headerLinks } from '../../assets/links/navigation'

function HeaderNav() {
  // Check if user is signed in
  const { user } = useSelector((store) => store.user)

  // Toggle mobile menu
  const [navIsOpen, setNavIsOpen] = useState(false)

  useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [navIsOpen])

  return (
    <NavHeader>
      <Navigation>
        {/* Start: Logo link */}
        <Link to="/" aria-label="okane home page">
          <Logo />
        </Link>
        {/* End: Logo link */}
        {/* Start: Nav links (Desktop only) */}
        <NavigationLinks>
          {headerLinks.map((link) => (
            <li key={link.name}>
              <TextLink to={link.href}>{link.name}</TextLink>
            </li>
          ))}
        </NavigationLinks>
        {/* End: Nav links (Desktop only) */}
        {/* Start: Sign in/up button (Desktop only) */}
        {user ? (
          <PrimaryLink to="dashboard">Dashboard</PrimaryLink>
        ) : (
          <PrimaryLink to="signin">Sign In</PrimaryLink>
        )}
        {/* End: Sign in/up button (Desktop only) */}
        {/* Start: Hamburger/close button (Small screens only) */}
        <IconButton
          type="button"
          aria-label="navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}
        >
          {navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
        </IconButton>
        {/* End: Hamburger/close button (Small screens only) */}
        {/* Start: Mobile nav (Small screens only) */}
        {navIsOpen && <MobileNav setNavIsOpen={setNavIsOpen} />}
        {/* End: Mobile nav (Small screens only) */}
      </Navigation>
    </NavHeader>
  )
}

export default HeaderNav
