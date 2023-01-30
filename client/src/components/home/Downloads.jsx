import React from 'react'

// Styled Components
import { SecondaryHeading, Paragraph } from '../../styles/TypographyStyles'
import { Container, SectionHeadingContainer } from '../../styles/LayoutStyles'
import {
  DownloadsPosition,
  DownloadsSection,
  GroupButtons,
  DownloadButton,
  DownloadButtonInnerFlex,
} from '../../styles/home/DownloadsStyles'

// Icons
import { WhiteAppleIcon, PlaystoreIcon } from '../../assets/icons/icons'

function Downloads() {
  return (
    <DownloadsSection>
      <Container>
        <DownloadsPosition>
          <SectionHeadingContainer center>
            <SecondaryHeading>Download our app</SecondaryHeading>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
          </SectionHeadingContainer>
          <GroupButtons>
            <DownloadButton>
              <WhiteAppleIcon />
              <DownloadButtonInnerFlex>
                <p>Download on the</p>
                <p>App Store</p>
              </DownloadButtonInnerFlex>
            </DownloadButton>
            <DownloadButton>
              <PlaystoreIcon />
              <DownloadButtonInnerFlex>
                <p>GET IT ON</p>
                <p>Google Play</p>
              </DownloadButtonInnerFlex>
            </DownloadButton>
          </GroupButtons>
        </DownloadsPosition>
      </Container>
    </DownloadsSection>
  )
}

export default Downloads
