import React from 'react';
import ReactDOM from 'react-dom';
import google from 'google-map-react';

export default class SearchBar extends React.Component {
  state = { placeholder: '', onPlacesChanged: undefined };

  componentDidMount() {
    var input = ReactDOM.findDOMNode(this.refs.input);
    this.searchBar = new google.maps.places.SearchBar(input);
    this.searchBar.addListener('places_changed', this.onPlacesChanged);
  }
  componentWillUnmount() {
    google.maps.event.clearInstanceListeners(this.searchBar);
  }

  onPlacesChanged = () => {
    const { onPlacesChanged } = this.state;
    if (onPlacesChanged) {
      onPlacesChanged(this.searchBar.getPlaces());
    }
  };

  render() {
    return (
      <div>
        <input ref="input" type="text" />
      </div>
    );
  }
}
