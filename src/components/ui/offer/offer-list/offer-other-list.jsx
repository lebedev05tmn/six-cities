import React from "react";
import OfferCard from "../offer-card/offer-card";
import AppTypes from "../../../../types/types";

const OfferOtherList = (props) => {
  const {offerData} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offerData &&
          offerData.map((elem) => (
            <OfferCard
              className={`near-place__card`}
              cardData={elem}
              key={elem.id}
            />
          ))}
      </div>
    </section>
  );
};

OfferOtherList.propTypes = {
  offerData: AppTypes.offerData,
};

export default OfferOtherList;
