import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';

import GoogleMap from './GoogleMap';
import SearchBox from './SearchBox';
import Marker from './Marker';

import './global.css';

export default class App extends Component {
  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
    center: [35.6762, 139.6503],
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  addPlace = (place) => {
    this.setState({ places: place });
  };

  render() {
    const { places, mapApiLoaded, mapInstance, mapApi, center } = this.state;
    return (
      <>
        {mapApiLoaded && (
          <SearchBox map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
        )}
        <div className="googleMap">
          <GoogleMap
            defaultZoom={10}
            defaultCenter={center}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API,
              libraries: ['places', 'geometry'],
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
          >
            {!isEmpty(places) &&
              places.map((place) => (
                <Marker
                  key={place.id}
                  text={place.name}
                  lat={place.geometry.location.lat()}
                  lng={place.geometry.location.lng()}
                />
              ))}
          </GoogleMap>
        </div>
      </>
    );
  }
}
