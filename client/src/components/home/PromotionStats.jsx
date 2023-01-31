import React from 'react'

import {
  AwardStats,
  DownloadStats,
  MoneyStats,
  PromotionInner,
  PromotionSection,
  Stats,
  StatsAndImageContainer,
  ImageContainer,
} from '../../styles/home/PromotionStyles'
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import { SecondaryHeading, Paragraph } from '../../styles/TypographyStyles'

function PromotionStats() {
  return (
    <PromotionSection>
      <Container>
        <PromotionInner>
          <SectionHeadingContainer>
            <SecondaryHeading>The best app to track expenses</SecondaryHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </Paragraph>
          </SectionHeadingContainer>
          <StatsAndImageContainer>
            <Stats>
              <DownloadStats>
                <h2>500K+</h2>
                <p>DOWNLOADS</p>
              </DownloadStats>
              <AwardStats>
                <h2>125+</h2>
                <p>AWARDS</p>
              </AwardStats>
              <MoneyStats>
                <h2>100M$+</h2>
                <p>MONEY SAVED</p>
              </MoneyStats>
            </Stats>
            <ImageContainer>
              <img src="https://picsum.photos/1200/1300" alt="" />
            </ImageContainer>
          </StatsAndImageContainer>
        </PromotionInner>
      </Container>
    </PromotionSection>
  )
}

export default PromotionStats
