import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import SearchBar from './SearchBar';

export default class GoogleMap extends Component {
  state = { center: { lat: 35.6762, lng: 139.6503 }, zoom: 11 };

  mapClick = ({ x, y, lat, lng, e }) => {
    console.log(x, y, lat, lng, e);
  };

  // handleApiLoaded = (map, maps) => {
  //   console.log(map, maps);
  // };

  render() {
    const { center, zoom } = this.state;
    return (
      <div>
        <div style={{ height: '100vh', width: '100%' }}>
          <SearchBar />
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
            defaultCenter={center}
            defaultZoom={zoom}
            onClick={this.mapClick}
            // yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}
