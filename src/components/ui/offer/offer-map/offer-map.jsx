import React, {useRef, useEffect, memo} from "react";
import leaflet from "leaflet";
import {connect} from "react-redux";
import AppTypes from "../../../../types/types";
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
          center: [
            cityData.city.location.latitude,
            cityData.city.location.longitude,
          ],
          zoom: cityData.city.location.zoom,
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
                  hoverCardId !== null && hoverCardId === element.id
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

  return <div id="map" style={{height: `100%`, width: `100%`}} />;
};

const mapStateToProps = ({INTERFACE}) => ({
  hoverCardId: INTERFACE.hoverCardId,
  offerCity: INTERFACE.city,
});

OfferMap.propTypes = {
  offerData: AppTypes.offerData,
  hoverCardId: AppTypes.anyId,
  offerCity: AppTypes.city,
};

export {OfferMap};

export default connect(mapStateToProps)(
  memo(OfferMap, (prevProps, nextProps) => {
    return (
      prevProps.offerData.length === nextProps.offerData.length &&
      prevProps.offerCity === nextProps.offerCity &&
      prevProps.hoverCardId === nextProps.hoverCardId
    );
  })
);
