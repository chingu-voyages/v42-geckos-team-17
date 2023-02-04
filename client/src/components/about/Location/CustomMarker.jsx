import React, { useEffect } from 'react'

// Styled components

// Leaflet
import { Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { Paragraph } from '../../../styles/TypographyStyles'

// Icon for marker
export const icon = new Icon({
  iconUrl: '/marker.svg',
  iconSize: [60, 60],
})

function CustomMarker({ office, activeOffice }) {
  // Leaflet
  const map = useMap()

  // If active office changes / location button clicked
  useEffect(() => {
    map.flyTo(activeOffice.geometry.coordinates, 14)
  }, [activeOffice])

  return (
    <Marker position={office.geometry.coordinates} icon={icon}>
      <Popup>
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
      </Popup>
    </Marker>
  )
}

export default CustomMarker
