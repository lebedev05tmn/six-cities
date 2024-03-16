import React from "react";
import OfferCard from "../offer-card/offer-card";

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

export default OfferOtherList;
