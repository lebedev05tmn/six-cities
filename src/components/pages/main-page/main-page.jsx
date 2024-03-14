import React, {useEffect} from "react";
import OfferCard from "../../ui/offer/offer-card/offer-card";
import Map from "../../ui/offer/offer-map/offer-map";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import SortVariants from "../../ui/sort-variants/sort-variants";

const MainPage = (props) => {
  const {offerData, city} = props;
  useEffect(() => {
    document.title = `6 cities`;
  });
  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in {city}</b>
            <SortVariants />
            <div className="cities__places-list places__list tabs__content">
              {offerData &&
                offerData.map((elem) => (
                  <OfferCard cardData={elem} key={elem.id} />
                ))}
            </div>
          </section>
          <div className="cities__right-section">
            <section
              className="cities__map map"
              style={{background: `none`, height: `794px`}}
            >
              <Map offerData={offerData} />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

MainPage.propTypes = {
  offerData: PropTypes.array,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offerData: state.offers,
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
