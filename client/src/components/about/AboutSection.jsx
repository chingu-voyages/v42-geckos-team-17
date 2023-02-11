import React from 'react'

// Styled components
import { SecondaryHeading, Paragraph } from '../../styles/TypographyStyles'
import { TextLink } from '../../styles/LinkStyles'
import {
  AboutContainer,
  DetailAndImageContainer,
  ImageContainer,
} from '../../styles/about/AboutStyles'
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'

// Image
import teamImage from '../../assets/images/team_image.svg'

export default function AboutSection() {
  return (
    <AboutContainer>
      <Container>
        <DetailAndImageContainer>
          <SectionHeadingContainer full>
            <SecondaryHeading as="h1">Our amazing story</SecondaryHeading>
            <Paragraph>
              Okane is a relatively young company, which was founded in 2023.
              Our app is all about helping people to manage their expenses, yet
              it's functionality goes beyond simple money tracker. We show
              people different ways to manage their money wisely.
            </Paragraph>
            <Paragraph>
              The app was build during the wonderful{' '}
              <TextLink to="https://www.chingu.io">voyage</TextLink> which was
              organized by Jim Medlock and his awesome team. Thanks to this
              opportunity we gained confidence and levelled up soft and
              technical skills.
            </Paragraph>
          </SectionHeadingContainer>
          <ImageContainer>
            <img src={teamImage} alt="" />
          </ImageContainer>
        </DetailAndImageContainer>
      </Container>
    </AboutContainer>
  )
}
