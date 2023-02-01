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

// Icons
import {
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
} from '../../assets/icons/icons'

const MobileNav = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <MobileNavInner>
        <NavigationLinks>
          <li>
            <TextLink big to="/about">
              About
            </TextLink>
          </li>
          <li>
            <TextLink big to="/">
              Pricing
            </TextLink>
          </li>
          <li>
            <TextLink big to="/contact">
              Contact
            </TextLink>
          </li>
        </NavigationLinks>
        <OutlineLink to="signin">Sign In</OutlineLink>
        <SocialLinks>
          <IconLink to="/" aria-label="twitter">
            <TwitterIcon />
          </IconLink>
          <IconLink to="/" aria-label="facebook">
            <FacebookIcon />
          </IconLink>
          <IconLink to="/" aria-label="youtube">
            <YoutubeIcon />
          </IconLink>
          <IconLink to="/" aria-label="instagram">
            <InstagramIcon />
          </IconLink>
        </SocialLinks>
      </MobileNavInner>
    </Overlay>,
    document.getElementById('portal')
  )
}

export default MobileNav
