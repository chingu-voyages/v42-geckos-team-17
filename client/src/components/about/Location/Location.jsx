import React, { useState } from 'react'

// Styled components
import {
  Container,
  SectionHeadingContainer,
} from '../../../styles/LayoutStyles'
import { SecondaryHeading, Paragraph } from '../../../styles/TypographyStyles'
import { LocationContainer } from '../../../styles/about/LocationStyles'
import { TextLink } from '../../../styles/LinkStyles'

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
          <SecondaryHeading>Where to find us</SecondaryHeading>
          <Paragraph>
            We have two beautiful offices and 24/7 support team. You can use{' '}
            <TextLink to="/contact">contact form</TextLink> to get additional
            information.
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
