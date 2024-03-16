import React, {useRef, useEffect} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {connect} from "react-redux";
import "leaflet/dist/leaflet.css";

const OfferMap = (props) => {
  const {offerData, hoverCardId, offerCity} = props;
  const mapRef = useRef();

  useEffect(() => {
    if (offerData && offerData.length > 0) {
      const cityData =
        hoverCardId === null
          ? offerData.find((elem) => elem.city.name === offerCity)
          : offerData.find(
              (elem) => elem.city.name === offerCity && elem.id === hoverCardId
            );

      if (cityData) {
        mapRef.current = leaflet.map(`map`, {
          center:
            hoverCardId === null
              ? [
                  cityData.city.location.latitude,
                  cityData.city.location.longitude,
                ]
              : [cityData.location.latitude, cityData.location.longitude],
          zoom:
            hoverCardId === null
              ? cityData.city.location.zoom
              : cityData.location.zoom,
          zoomControl: true,
          marker: true,
        });

        leaflet
          .tileLayer(
            `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {attribution: `© OpenStreetOfferMap contributors © CARTO`}
          )
          .addTo(mapRef.current);

        offerData.forEach((element) => {
          leaflet
            .marker([element.location.latitude, element.location.longitude], {
              icon: leaflet.icon({
                iconUrl:
                  hoverCardId === null
                    ? `/img/pin.svg`
                    : hoverCardId === element.id
                    ? `/img/pin-active.svg`
                    : `/img/pin.svg`,
                iconSize: [30, 30],
              }),
            })
            .addTo(mapRef.current);
        });
      }
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [offerData, hoverCardId, offerCity]);

  return <div id="map" style={{height: `100%`, width: `100%`}} ref={mapRef} />;
};

OfferMap.propTypes = {
  offerData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  hoverCardId: state.hoverCardId,
  offerCity: state.city,
});

export {OfferMap};
export default connect(mapStateToProps)(OfferMap);
