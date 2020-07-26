import React from 'react';
import GoogleMapReact from 'google-map-react';

const GoogleMap = ({ children, ...props }) => (
  <div style={{ height: '100%', width: '100%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </div>
);

export default GoogleMap;
