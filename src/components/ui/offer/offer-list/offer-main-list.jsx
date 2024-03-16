import React from "react";
import SortVariants from "../../sort-variants/sort-variants";
import OfferCard from "../offer-card/offer-card";
import {connect} from "react-redux";

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
              <OfferCard cardData={elem} key={`comments-` + elem.id} />
            ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  city: state.city,
  offerData: state.offers,
});

export {OfferMainList};
export default connect(mapStateToProps)(OfferMainList);
