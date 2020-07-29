import React from 'react';
// import isEmpty from 'lodash.isempty';

// import GoogleMap from '../components/GoogleMap';

const MarkerInfoWindow = (props) => {
  const { place } = props;
  const openHours = place.opening_hours;
  const rate = place.rating;
  return (
    <div className="infoWindow" style={{ bottom: rate ? null : 100 }}>
      <div style={{ fontSize: 16 }}>{place.name}</div>
      <div style={{ fontSize: 14, color: 'grey' }}>{place.formatted_address}</div>
      <div style={{ fontSize: 14 }}>
        <span style={{ color: 'grey' }}>{place.rating} </span>
        <span style={{ color: 'orange' }}>
          {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
        </span>
        <span style={{ color: 'lightgrey' }}>
          {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
        </span>
      </div>

      {place.types[0] === 'colloquial_area' ? null : (
        <div style={{ fontSize: 14, color: 'grey' }}>{place.types[0]}</div>
      )}
      <div style={{ fontSize: 14, color: 'grey' }}>
        {'$'.repeat(place.price_level)}
      </div>
      {openHours ? (
        <div style={{ fontSize: 14, color: 'green' }}>
          {place.opening_hours.isOpen ? 'Open' : 'Closed'}
        </div>
      ) : null}
    </div>
  );
};

export default MarkerInfoWindow;
