import React, { Component } from 'react';
import { render } from '@testing-library/react';

class App extends Component {
  componentDidMount(){
    initMap();
  }
  initMap=()=>{
    let map = new google.maps.Map(document.getElementById("map"))
  }
  render() {
    return (
      <div>
        <h1>App</h1>
        <div id="map"></div>
      </div>
    );
  }
}

export default App;
