import React from 'react'

// Leaflet
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' // <- Leaflet styles, without it we have weird squares

// Components
import CustomMarker from './CustomMarker'

function Map({ offices, activeOffice }) {
  return (
    <MapContainer center={activeOffice.geometry.coordinates} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {offices.map((office) => (
        <CustomMarker
          key={office.id}
          office={office}
          activeOffice={activeOffice}
        />
      ))}
    </MapContainer>
  )
}

export default Map
