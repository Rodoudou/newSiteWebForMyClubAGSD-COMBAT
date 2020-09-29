import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
    static defaultProps = {
      center: {
        lat: 48.862725,
        lng: 2.287592
      },
      zoom: 11
    };
   
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: `AIzaSyCI_TwFVtodd307zsBL86MK2SzYays505g` }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={48.862725}
              lng={2.287592}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }

export default Map;