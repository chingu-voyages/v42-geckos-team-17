import React from 'react'
import {
  AboutDetail,
  AboutSecondaryHeading,
  AboutParagraph,
  AboutSectionStyles,
  DetailAndImageContainer,
  ImageContainer,
} from '../../styles/about/AboutStyles'
import { Container } from '../../styles/LayoutStyles'

export default function AboutSection() {
  return (
    <AboutSectionStyles>
      <Container>
        <DetailAndImageContainer>
          <AboutDetail>
            <AboutSecondaryHeading>Our amazing story</AboutSecondaryHeading>
            <AboutParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.consectetur adipiscing elit.
            </AboutParagraph>
            <AboutParagraph>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Bro do eiusmod tempor incididunt Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.consectetur adipiscing elit.
            </AboutParagraph>
          </AboutDetail>
          <ImageContainer>
            <img src="https://picsum.photos/1200/1300" alt="" />
          </ImageContainer>
        </DetailAndImageContainer>
      </Container>
    </AboutSectionStyles>
  )
}
