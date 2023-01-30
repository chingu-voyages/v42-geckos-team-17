import React from 'react'

import {
  DownloadsPosition,
  DownloadsSection,
  GroupButtons,
  DownloadButton,
  DownloadButtonInnerFlex,
} from '../../styles/home/DownloadsStyles'

import { WhiteAppleIcon, PlaystoreIcon } from '../../assets/icons/icons'

function Downloads() {
  return (
    <DownloadsSection>
      <DownloadsPosition>
        <h2>Download our app</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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
    </DownloadsSection>
  )
}

export default Downloads
