import React from 'react';

const Marker = ({ text, onClick }) => {
  return <div className="marker" alt={text} onClick={onClick} />;
};

export default Marker;
