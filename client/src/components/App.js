import React, { Component } from 'react';
import isEmpty from 'lodash.isempty';

import GoogleMap from './GoogleMap';
import SearchBox from './SearchBox';
import Marker from './Marker';

// import googleMapDB from '../apis/googleMapDB';

import './global.css';

export default class App extends Component {
  state = {
    mapApiLoaded: false,
    mapInstance: null,
    mapApi: null,
    places: [],
    center: [35.6762, 139.6503],
    zoom: 10,
  };

  apiHasLoaded = (map, maps) => {
    this.setState({
      mapApiLoaded: true,
      mapInstance: map,
      mapApi: maps,
    });
  };

  componentDidMount = () => {};

  addPlace = (place) => {
    console.log(place);
    // console.log(`number of places ${place.length}`);
    // console.log(`added ${JSON.stringify(place[0].geometry.location)}`);
    // if (place.length > 1) {
    //   place.map((p) => {
    //     return console.log(
    //       `formatted address: ${JSON.stringify(p.formatted_address)}`
    //     );
    //   });
    // }
    // console.log(`added ${JSON.stringify(place[1].geometry.location)}`);
    this.setState({ places: place });

    // googleMapDB.post('/api/pinlocation', {
    //   formatted_address: `${place[0].formatted_address}`
    // })
    // .then((res) => {
    //   console.log(res.status);
    // })
    // .catch((err) => {
    //   console.log(err);
    // })
  };

  onChildClickCallback = (key) => {
    console.log('onChildClickCallback');
    this.setState((state) => {
      const index = state.places.findIndex((e) => e.id === key);
      state.places[index].show = !state.places[index].show; // eslint-disable-line no-param-reassign
      return { places: state.places };
    });
  };

  render() {
    const { places, mapApiLoaded, mapInstance, mapApi, center, zoom } = this.state;
    return (
      <>
        {mapApiLoaded && (
          <SearchBox map={mapInstance} mapApi={mapApi} addplace={this.addPlace} />
        )}
        <div className="googleMap">
          <GoogleMap
            defaultZoom={zoom}
            defaultCenter={center}
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_API,
              libraries: ['places', 'geometry'],
            }}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.apiHasLoaded(map, maps)}
            onChildClick={this.onChildClickCallback}
          >
            {!isEmpty(places) &&
              places.map((place) => (
                <Marker
                  key={place.id}
                  text={place.name}
                  lat={place.geometry.location.lat()}
                  lng={place.geometry.location.lng()}
                  place={place}
                  show={place.show}
                />
              ))}
          </GoogleMap>
        </div>
      </>
    );
  }
}
