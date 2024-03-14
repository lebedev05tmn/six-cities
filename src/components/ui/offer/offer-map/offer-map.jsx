import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {city, zoom} from "../../../../const";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

const Map = (props) => {
  const {offerData, hoverCardId} = props;
  const mapRef = useRef();

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
        leaflet
          .marker([element.location.latitude, element.location.longitude], {
            icon: leaflet.icon({
              iconUrl: [
                hoverCardId === null
                  ? `img/pin.svg`
                  : hoverCardId === element.id
                  ? `img/pin-active.svg`
                  : `img/pin.svg`,
              ],
              iconSize: [30, 30],
            }),
          })
          .addTo(mapRef.current);
      });
    return () => {
      mapRef.current.remove();
    };
  });

  return <div id="map" style={{height: `100%`, width: `100%`}} ref={mapRef} />;
};

Map.propTypes = {
  offerData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  hoverCardId: state.hoverCardId,
});

export {Map};
export default connect(mapStateToProps)(Map);
