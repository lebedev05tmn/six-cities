import React, {useEffect} from "react";
import OfferMap from "../../ui/offer/offer-map/offer-map";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import OfferMainList from "../../ui/offer/offer-list/offer-main-list";
import CityVariants from "../../services/city-variants/city-variants";
import AppTypes from "../../../types/types";

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
          <CityVariants city={city} onChangeCity={onChangeCity} />
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

const mapStateToProps = (state) => ({
  city: state.city,
  offerData: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
});

MainPage.propTypes = {
  offerData: AppTypes.offerData,
  onChangeCity: AppTypes.anyFunction,
  city: AppTypes.city,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
