import React from 'react'

import { QuaternaryHeading, Paragraph } from '../../../styles/TypographyStyles'
import {
  MapNavigation,
  LocationButton,
} from '../../../styles/about/LocationStyles'

function LocationButtons({ activeOffice, setActiveOffice, offices }) {
  return (
    <MapNavigation>
      {offices.map((office) => (
        <LocationButton
          onClick={() => setActiveOffice(office)}
          key={office.id}
          active={activeOffice.id === office.id}
        >
          <QuaternaryHeading as="h2">{office.country}</QuaternaryHeading>
          <Paragraph>
            {office.adddress_part1}
            <br />
            {office.adddress_part2}
            <br />
            {office.adddress_part3}
          </Paragraph>
          <Paragraph>
            P : {office.phone}
            <br />M : {office.email}
          </Paragraph>
        </LocationButton>
      ))}
    </MapNavigation>
  )
}

export default LocationButtons
