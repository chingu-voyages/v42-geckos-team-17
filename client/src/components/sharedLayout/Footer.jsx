import React, { useState } from 'react'

// Routing
import { Link } from 'react-router-dom'

// Components
import FormInputGroup from '../form/FormInputGroup'

// Styled components
import {
  FooterContainer,
  FooterInner,
  Social,
  SocialLinks,
  Navigation,
  SubscribeForm,
  Copyrights,
} from '../../styles/sharedLayout/FooterStyles'
import { TextLink, IconLink } from '../../styles/LinkStyles'
import { PrimaryButton } from '../../styles/ButtonStyles'

// Icons
import Logo from '../../assets/logo'

// Links data
import socialLinks from '../../assets/links/social'
import { footerLinks } from '../../assets/links/navigation'

function Footer() {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // If the field is empty
    if (email === '') {
      setError('Please enter your email.')
    }

    // If the field is not empty, remove error message
    if (email !== '') {
      setError('')
    }

    // Empty email field
    setEmail('')
  }

  return (
    <FooterContainer>
      <FooterInner>
        {/* Start: Social links and Logo Column */}
        <Social>
          <Link to="/" aria-label="okane home page">
            <Logo />
          </Link>
          <SocialLinks>
            {socialLinks.map((link) => (
              <IconLink
                key={link.name}
                to={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                {link.icon}
              </IconLink>
            ))}
          </SocialLinks>
        </Social>
        {/* End: Social links and Logo Column */}
        {/* Start: Navigation links column */}
        <Navigation>
          {footerLinks.map((navColumn) => (
            <div key={navColumn.id}>
              <span>{navColumn.title}</span>
              <ul>
                {navColumn.links.map((link) => (
                  <li key={link.id}>
                    <TextLink small to={link.href}>
                      {link.name}
                    </TextLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Navigation>
        {/* End: Navigation links column */}
        {/* Start: Subscription form column */}
        <SubscribeForm onSubmit={(e) => handleSubmit(e)}>
          <FormInputGroup
            type="email"
            name="emailToSub"
            value={email}
            handleChange={(e) => setEmail(e.currentTarget.value)}
            placeholderText="Enter your email"
            errorMsg={error}
          />
          <PrimaryButton small>Go</PrimaryButton>
        </SubscribeForm>
        {/* End: Subscription form column */}
        <Copyrights>&copy; Okane. All Rights Reserved</Copyrights>
      </FooterInner>
    </FooterContainer>
  )
}

export default Footer
