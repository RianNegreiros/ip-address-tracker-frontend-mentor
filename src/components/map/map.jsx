import React, { useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import context from '../../context/context'
import Marker from '../marker/marker'
import './map-styles.scss'

const Map = () => {
  const { state } = useContext(context)

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBn_3ejZnHXRfR6XRgnmIDjGW5nv3lOvr0' }}
        defaultCenter={[state.lat, state.lng]}
        defaultZoom={15}
        center={[state.lat, state.lng]}
      >
        <Marker lat={state.lat} lng={state.lng}  />
      </GoogleMapReact>
    </div>

  )
}

export default Map
