import React from 'react';

import MarkerInfoWindow from './MarkerInfoWindow';

const Marker = ({ text, onClick, show, place }) => {
  return (
    <div>
      <div className="marker" style={{ backgroundColor: show ? 'red' : 'blue' }} alt={text} onClick={onClick} />
      {show && (
        <MarkerInfoWindow
          place={place}
        />
      )}
    </div>
  );
};

export default Marker;
