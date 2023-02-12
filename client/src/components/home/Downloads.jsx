import React from 'react'

// Styled Components
import { Paragraph, SecondaryHeading } from '../../styles/TypographyStyles'
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
              Our app works across Windows, iOS, and Android.
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
