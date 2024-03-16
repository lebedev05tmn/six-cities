import React, {useEffect} from "react";
import OfferMap from "../../ui/offer/offer-map/offer-map";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {AppCities} from "../../../const";
import {ActionCreator} from "../../../store/action";
import OfferMainList from "../../ui/offer/offer-list/offer-main-list";

const MainPage = (props) => {
  const {offerData, city, onChangeCity} = props;
  useEffect(() => {
    document.title = `6 cities`;
  });

  return (
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {Object.values(AppCities).map((appCity) => (
              <li className="locations__item" key={appCity}>
                <a
                  className={
                    city === appCity
                      ? `locations__item-link tabs__item tabs__item--active`
                      : `locations__item-link tabs__item`
                  }
                  onClick={() => onChangeCity(appCity)}
                >
                  <span>{appCity}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <OfferMainList />
          <div className="cities__right-section">
            <section
              className="cities__map map"
              style={{background: `none`, height: `794px`}}
            >
              <OfferMap offerData={offerData} />
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

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
