import React from "react";
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

const GoogleMapComponent = () => (
  <GoogleMapLoader
    containerElement={ <div style={ { "height": "100%" } }/> }
    googleMapElement={
      <GoogleMap defaultZoom={ 8 } defaultCenter={ { "lat": 41.820760, "lng": -70.552131} }>
        <Marker position={ { "lat": 41.820760, "lng": -70.552131} } key={ "MDI" }/>
      </GoogleMap>
    }
   />
);

export default GoogleMapComponent;
