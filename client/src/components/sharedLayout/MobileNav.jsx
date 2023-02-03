import React from 'react'
import ReactDOM from 'react-dom'

// Styled Components
import { OutlineLink, TextLink, IconLink } from '../../styles/LinkStyles'
import {
  Overlay,
  MobileNavInner,
  NavigationLinks,
  SocialLinks,
} from '../../styles/sharedLayout/MobileNavStyles'

// Links data
import { headerLinks } from '../../assets/links/navigation'
import socialLinks from '../../assets/links/social'

const MobileNav = ({ setNavIsOpen }) => {
  return ReactDOM.createPortal(
    <Overlay>
      <MobileNavInner>
        <NavigationLinks>
          {headerLinks.map((link) => (
            <li key={link.name}>
              <TextLink big onClick={() => setNavIsOpen(false)} to={link.href}>
                {link.name}
              </TextLink>
            </li>
          ))}
        </NavigationLinks>
        <OutlineLink onClick={() => setNavIsOpen(false)} to="signin">
          Sign In
        </OutlineLink>
        <SocialLinks>
          {socialLinks.map((link) => (
            <IconLink
              onClick={() => setNavIsOpen(false)}
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
              to={link.href}
              aria-label={link.name}
            >
              {link.icon}
            </IconLink>
          ))}
        </SocialLinks>
      </MobileNavInner>
    </Overlay>,
    document.getElementById('portal')
  )
}

export default MobileNav