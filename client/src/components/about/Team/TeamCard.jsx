import React from 'react'

// Styled components
import {
  TeamCardContainer,
  SocialLinks,
} from '../../../styles/about/TeamStyles'
import { QuaternaryHeading, Paragraph } from '../../../styles/TypographyStyles'
import { IconLink } from '../../../styles/LinkStyles'

// Icons
import {
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
} from '../../../assets/icons/icons'

function TeamCard({ member }) {
  return (
    <TeamCardContainer>
      <img src={member.image} alt="" />
      <QuaternaryHeading>{member.name}</QuaternaryHeading>
      <Paragraph>{member.quote}</Paragraph>
      <SocialLinks>
        {member.links.map((link) => (
          <IconLink
            key={`${link.name}-${member.name}}`}
            to={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
          >
            {link.name === 'github' ? (
              <GithubIcon />
            ) : link.name === 'linkedin' ? (
              <LinkedinIcon />
            ) : (
              <TwitterIcon />
            )}
          </IconLink>
        ))}
      </SocialLinks>
    </TeamCardContainer>
  )
}

export default TeamCard
