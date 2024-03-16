import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../../const";
import {connect} from "react-redux";
import {ActionCreator} from "../../../../store/action";
import {useNavigate} from "react-router-dom";

const OfferCard = (props) => {
  const {cardData, onUserHover, authorizationStatus} = props;
  const navigate = useNavigate();
  const {
    id,
    price,
    rating,
    title,
    type,
    preview_image,
    is_favorite,
    is_premium,
  } = cardData;

  return (
    <article
      className="cities__place-card place-card"
      onMouseEnter={() => onUserHover(id)}
      onMouseLeave={() => onUserHover(null)}
    >
      {is_premium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.PROPERTIES + id}>
          <img
            className="place-card__image"
            src={preview_image}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              is_favorite && `place-card__bookmark-button--active`
            } button`}
            type="button"
            onClick={() =>
              !authorizationStatus ? navigate(AppRoute.LOGIN) : ""
            }
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.floor(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.PROPERTIES + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    preview_image: PropTypes.string.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    is_premium: PropTypes.bool.isRequired,
  }),
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onUserHover(id) {
    dispatch(ActionCreator.hoverCard(id));
  },
});

export {OfferCard};
export default connect(mapStateToProps, mapDispatchToProps)(OfferCard);
