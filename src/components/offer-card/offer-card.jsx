import React from "react";
import PropTypes from "prop-types";

const OfferCard = (props) => {
  const {cardData} = props;

  return (
    <article className="cities__place-card place-card">
      {cardData.isPremium ? (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      ) : (
        ``
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={`img/${cardData.img}`}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{cardData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              cardData.isFavorite
                ? `place-card__bookmark-button--active button`
                : `button`
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${cardData.stars * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">{cardData.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    stars: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    isFavorite: PropTypes.bool,
    isPremium: PropTypes.bool,
  }),
};

export default OfferCard;
