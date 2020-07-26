import React from 'react';
import './marker.css';

const Marker = ({ text, onClick }) => {
  return <div className="marker" alt={text} onClick={onClick} />;
};

export default Marker;
