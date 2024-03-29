import React, {useEffect} from "react";
import OfferMap from "../../ui/offer/offer-map/offer-map";
import {connect} from "react-redux";
import {changeCity} from "../../../store/action";
import OfferMainList from "../../ui/offer/offer-list/offer-main-list";
import CityVariants from "../../services/city-variants/city-variants";
import AppTypes from "../../../types/types";
import MainEmpty from "../../ui/main-empty/main-empty";

const MainPage = (props) => {
  const {offerData, city, onChangeCity} = props;
  useEffect(() => {
    document.title = `6 cities`;
  });

  return (
    <main
      className={
        offerData.length && offerData
          ? `page__main page__main--index`
          : `page__main page__main--index page__main--index-empty`
      }
    >
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CityVariants city={city} onChangeCity={onChangeCity} />
        </section>
      </div>
      {offerData.length && offerData ? (
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
      ) : (
        <MainEmpty />
      )}
    </main>
  );
};

const mapStateToProps = ({INTERFACE, DATA}) => ({
  city: INTERFACE.city,
  offerData: DATA.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity(city) {
    dispatch(changeCity(city));
  },
});

MainPage.propTypes = {
  offerData: AppTypes.offerData,
  onChangeCity: AppTypes.anyFunction,
  city: AppTypes.city,
};

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
