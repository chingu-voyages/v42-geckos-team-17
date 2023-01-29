import React from 'react'
import {
  DownloadsPosition,
  DownloadsSection,
  GroupButtons,
  DownloadButton,
} from '../../styles/home/DownloadsStyles'

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
          <DownloadButton
            title="Download on the"
            subtitle="App store"
            icon="Apple"
          />
          <DownloadButton
            title="GET IT ON"
            subtitle="Google Play"
            icon="Google"
          />
        </GroupButtons>
      </DownloadsPosition>
    </DownloadsSection>
  )
}

export default Downloads
