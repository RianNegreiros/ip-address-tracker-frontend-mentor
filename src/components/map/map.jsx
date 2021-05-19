import axios from 'axios'
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './map-styles.scss'

const Map = () => {
  const apiUrl = 'https://geo.ipify.org/api/v1?apiKey=at_WUJobuHlWQRt7209TiDp5zHsOO9GP&ipAddress=8.8.8.8'
  axios.get(apiUrl).then((res) => res.data)
  


  return (
    <MapContainer center={[37.38605, -122.08385]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
