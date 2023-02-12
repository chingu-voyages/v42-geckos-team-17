import React from 'react'

// Styled components
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

// Image
import collageImg from '../../assets/images/mobile_ collage.svg'

function PromotionStats() {
  return (
    <PromotionSection>
      <Container>
        <PromotionInner>
          <SectionHeadingContainer>
            <SecondaryHeading>The best app to track expenses</SecondaryHeading>
            <Paragraph>
              We help you understand your income and spending so you have
              maximum control over your money.
            </Paragraph>
          </SectionHeadingContainer>
          <StatsAndImageContainer>
            <Stats>
              <DownloadStats>
                <SecondaryHeading as="span">500K+</SecondaryHeading>
                <Paragraph>DOWNLOADS</Paragraph>
              </DownloadStats>
              <AwardStats>
                <SecondaryHeading as="span">125+</SecondaryHeading>
                <Paragraph>AWARDS</Paragraph>
              </AwardStats>
              <MoneyStats>
                <SecondaryHeading as="span">100M$+</SecondaryHeading>
                <Paragraph>MONEY SAVED</Paragraph>
              </MoneyStats>
            </Stats>
            <ImageContainer>
              <img src={collageImg} alt="" />
            </ImageContainer>
          </StatsAndImageContainer>
        </PromotionInner>
      </Container>
    </PromotionSection>
  )
}

export default PromotionStats
