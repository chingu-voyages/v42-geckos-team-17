import React, { useState } from 'react'

// Styled components
import {
  Container,
  SectionHeadingContainer,
} from '../../../styles/LayoutStyles'
import { SecondaryHeading, Paragraph } from '../../../styles/TypographyStyles'
import { LocationContainer } from '../../../styles/about/LocationStyles'

// Components
import Map from './Map'
import LocationButtons from './LocationButtons'

// Location data
import * as locationData from '../../../assets/data/locationData.json'

function Location() {
  // Active office
  const [activeOffice, setActiveOffice] = useState(locationData.locations[0])

  return (
    <LocationContainer>
      <Container>
        {/* Start: Section Heading */}
        <SectionHeadingContainer>
          <SecondaryHeading as="h1">Where to find us</SecondaryHeading>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </Paragraph>
        </SectionHeadingContainer>
        {/* End: Section Heading */}
      </Container>
      {/* Start: Map */}
      <Map offices={locationData.locations} activeOffice={activeOffice} />
      {/* End: Map */}
      <Container>
        {/* Start: Location buttons */}
        <LocationButtons
          activeOffice={activeOffice}
          setActiveOffice={setActiveOffice}
          offices={locationData.locations}
        />
        {/* End: Location buttons */}
      </Container>
    </LocationContainer>
  )
}

export default Location
