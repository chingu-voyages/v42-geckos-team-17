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
import {
  TwitterIcon,
  FacebookIcon,
  YoutubeIcon,
  InstagramIcon,
} from '../../assets/icons/icons'

// Navigation links data
const navLinks = [
  {
    id: '0',
    title: 'About',
    links: [
      { id: '01', name: 'Company', href: '/' },
      { id: '02', name: 'Locations', href: '/' },
      { id: '03', name: 'Our team', href: '/' },
    ],
  },
  {
    id: '1',
    title: 'Pricing',
    links: [
      { id: '11', name: 'Options', href: '/' },
      { id: '12', name: 'Testimonials', href: '/' },
      { id: '13', name: 'FAQ', href: '/' },
    ],
  },
  {
    id: '2',
    title: 'Contact',
    links: [{ id: '21', name: 'Contact us', href: '/contact' }],
  },
]

function Footer() {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    // If the field is empty
    if (email === '') {
      setError('Please enter your email')
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
        </Social>
        {/* End: Social links and Logo Column */}
        {/* Start: Navigation links column */}
        <Navigation>
          {navLinks.map((navColumn) => (
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
            name="email"
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
