import React from 'react'

// Leaflet
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css' // <- Leaflet styles, without it we have weird squares

// Components
import CustomMarker from './CustomMarker'

// Choose tile from here https://leaflet-extras.github.io/leaflet-providers/preview/

function Map({ offices, activeOffice }) {
  return (
    <MapContainer center={activeOffice.geometry.coordinates} zoom={14}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
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
