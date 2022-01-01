import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from 'components/LocationPin/LocationPin';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 650px;
  margin-bottom: 200px;
  padding-top: 100px;
  @media (max-width: 1100px) {
    height: 560px;
  }
  @media (max-width: 1100px) {
    height: 560px;
  }
  @media (max-width: 700px) {
    height: 450px;
    padding-top: 50px;
  }
  @media (max-width: 700px) {
    margin-bottom: 100px;
  }
`;

const locations = [
  {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 36.15,
    lng: -86.48,
  },
  {
    address: '3399 Wines Lane TX',
    lat: 30.2,
    lng: -97.79,
  },
];

const defaultCenter = {
  lat: locations.reduce((sum, location) => location.lat + sum, 0) / locations.length,
  lng: locations.reduce((sum, location) => location.lng + sum, 0) / locations.length,
};

const Map = React.forwardRef(({ location, zoomLevel }, ref) => (
  <Wrapper ref={ref}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAGSzpjVkyij2Lf8shfPHVRJu4mFaD_ieM' }}
      defaultCenter={defaultCenter}
      defaultZoom={5}
    >
      {locations.map((location) => (
        <LocationPin lat={location.lat} lng={location.lng} text={location.address} />
      ))}

      <LocationPin lat={locations[0].lat} lng={locations[0].lng} text={locations[0].address} />
    </GoogleMapReact>
  </Wrapper>
));

export default Map;
