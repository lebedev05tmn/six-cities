import React from "react";
import SortVariants from "../../../services/sort-variants/sort-variants";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";
import AppTypes from "../../../../types/types";

const OfferMainList = (props) => {
  const {city, offerData} = props;
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offerData.filter((elem) => elem.city.name === city).length} places to
        stay in {city}
      </b>
      <SortVariants />
      <div className="cities__places-list places__list tabs__content">
        {offerData &&
          offerData
            .filter((elem) => elem.city.name === city)
            .map((elem) => (
              <OfferCard cardData={elem} key={`card-` + elem.id} />
            ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
  offerData: state.offers,
});

OfferMainList.propTypes = {
  city: AppTypes.city,
  offerData: AppTypes.offerData,
};

export {OfferMainList};
export default connect(mapStateToProps)(OfferMainList);
