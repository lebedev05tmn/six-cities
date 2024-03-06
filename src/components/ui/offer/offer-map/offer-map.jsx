import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {city, zoom} from "../../../../const";

import "leaflet/dist/leaflet.css";

function Map(props) {
  const {offerData} = props;
  const mapRef = useRef();
  const icon = leaflet.icon({iconUrl: `img/pin.svg`, iconSize: [30, 30]});

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true,
    });
    leaflet
      .tileLayer(
        `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: "© OpenStreetMap contributors © CARTO"}
      )
      .addTo(mapRef.current);
    offerData &&
      offerData.forEach((element) => {
        leaflet.marker(element.coordinate, {icon}).addTo(mapRef.current);
      });
    return () => {
      mapRef.current.remove();
    };
  });

  return <div id="map" style={{height: `100%`, width: `100%`}} ref={mapRef} />;
}

Map.propTypes = {
  offerData: PropTypes.array,
};

export default Map;
