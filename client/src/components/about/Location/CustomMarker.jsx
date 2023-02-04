import React, { useEffect } from 'react'

// Leaflet
import { Marker, Popup, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'

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
    map.flyTo(activeOffice.geometry.coordinates, 12)
  }, [activeOffice])

  return (
    <Marker
      position={office.geometry.coordinates}
      icon={icon}
      eventHandlers={{
        click: (e) => {
          map.flyTo(e.latlng, 14)
        },
      }}
    >
      <Popup>
        {office.country} <br /> {office.adddress_part1}
      </Popup>
    </Marker>
  )
}

export default CustomMarker
