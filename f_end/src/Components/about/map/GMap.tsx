import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import "../About.scss";
import Marker from './Marker/Marker';

const Map = () => {

  const [center, setCenter] = useState({ lat: -37.84759, lng: 145.0005 });
  const [zoom, setZoom] = useState(17);
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCn3HGIGCFqu7d40xXSImH4jdi1G3DD23g" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker
          lat={-37.84759139082593}
          lng={145.00053449854653}
          name="415 Malvern Road South Yarra, Melbourne"
          color="blue"
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
