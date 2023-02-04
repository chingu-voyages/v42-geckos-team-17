import React from 'react'

// Styled components
import { SecondaryHeading, Paragraph } from '../../styles/TypographyStyles'

import {
  AboutSectionStyles,
  DetailAndImageContainer,
  ImageContainer,
} from '../../styles/about/AboutStyles'
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <Container>
        <DetailAndImageContainer>
          <SectionHeadingContainer full>
            <SecondaryHeading as="h1">Our amazing story</SecondaryHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.consectetur adipiscing elit.
            </Paragraph>
            <Paragraph>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bro do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.consectetur adipiscing elit.
            </Paragraph>
          </SectionHeadingContainer>
          <ImageContainer>
            <img src="https://picsum.photos/1200/1300" alt="" />
          </ImageContainer>
        </DetailAndImageContainer>
      </Container>
    </AboutSectionStyles>
  )
}
