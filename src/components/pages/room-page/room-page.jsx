import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import CommentField from "../../ui/comments/comment-field";
import CommentList from "../../ui/comments/comment-list";
import OfferMap from "../../ui/offer/offer-map/offer-map";
import OfferOtherList from "../../ui/offer/offer-list/offer-other-list";
import NotFoundPage from "../not-found-page/not-found-page";
import {connect} from "react-redux";
import LoadingScreen from "../../ui/loading-screen/loading-screen";
import {useNavigate} from "react-router-dom";
import {AppRoute} from "../../../const";
import AppTypes from "../../../types/types";
import {PostStatus} from "../../../const";
import {
  fetchOffer,
  postFavoriteOffer,
  fetchComments,
  fetchHotelNearby,
} from "../../../store/api-actions";
import {resetRoomStatus} from "../../../store/action";

const RoomPage = (props) => {
  const {
    onLoadOffer,
    isOfferLoaded,
    offerData,
    onLoadNearbies,
    isNearbyLoaded,
    nearbies,
    onLoadComments,
    isCommentsLoaded,
    comments,
    authorizationStatus,
    onUserFavorited,
    onChangeId,
  } = props;

  const navigate = useNavigate();
  const {id} = useParams();
  useEffect(() => {
    document.title = `6 cities: property`;
    onChangeId();
  }, [id]);

  useEffect(() => {
    if (!isOfferLoaded) {
      onLoadOffer(id);
    }
  }, [id, isOfferLoaded]);

  useEffect(() => {
    if (!isNearbyLoaded) {
      onLoadNearbies(id);
    }
  }, [id, isNearbyLoaded]);

  useEffect(() => {
    if (!isNearbyLoaded) {
      onLoadComments(id);
    }
  }, [id, isCommentsLoaded]);

  if (!isNearbyLoaded || !isCommentsLoaded || !isOfferLoaded) {
    return <LoadingScreen />;
  }

  if (!offerData) {
    return <NotFoundPage />;
  }
  const {
    price,
    rating,
    title,
    type,
    images,
    is_premium,
    goods,
    host,
    description,
    is_favorite,
  } = offerData;

  return (
    Object.entries(offerData).length && (
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img
                    className="property__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {is_premium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={
                    is_favorite
                      ? `property__bookmark-button property__bookmark-button--active button`
                      : `property__bookmark-button button`
                  }
                  type="button"
                  onClick={() =>
                    !authorizationStatus
                      ? navigate(AppRoute.LOGIN)
                      : onUserFavorited(
                          id,
                          !is_favorite ? PostStatus.ADD : PostStatus.REMOVE
                        )
                  }
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${20 * rating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good, index) => (
                    <li className="property__inside-item" key={`good-${index}`}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatar_url}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name"> {host.name} </span>
                  <span className="property__user-status">
                    {host.is_pro ? `Pro` : `Not-pro`}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews &middot;
                  <span className="reviews__amount">
                    {comments ? comments.length : 0}
                  </span>
                </h2>
                {comments && comments.length && (
                  <CommentList key={offerData.id} currentData={comments} />
                )}
                {authorizationStatus && <CommentField />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <OfferMap offerData={nearbies} />
          </section>
        </section>
        <div className="container">
          {nearbies && <OfferOtherList offerData={nearbies} />}
        </div>
      </main>
    )
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer: (id) => dispatch(fetchOffer(id)),
  onLoadNearbies: (id) => dispatch(fetchHotelNearby(id)),
  onLoadComments: (id) => dispatch(fetchComments(id)),
  onUserFavorited: (id, status) => dispatch(postFavoriteOffer(id, status)),
  onChangeId: () => dispatch(resetRoomStatus()),
});

const mapStateToProps = ({DATA, LOGIN}) => ({
  isOfferLoaded: DATA.isOfferLoaded,
  offerData: DATA.offer,
  isNearbyLoaded: DATA.isNearbyLoaded,
  nearbies: DATA.nearbies,
  authorizationStatus: LOGIN.authorizationStatus,
  isCommentsLoaded: DATA.isCommentsLoaded,
  comments: DATA.comments,
});

RoomPage.propTypes = {
  onLoadOffer: AppTypes.anyFunction,
  isOfferLoaded: AppTypes.anyFlag,
  offerData: AppTypes.offer,
  authorizationStatus: AppTypes.anyFlag,
  isNearbyLoaded: AppTypes.anyFlag,
  nearbies: AppTypes.offerData,
  isCommentsLoaded: AppTypes.anyFlag,
  comments: AppTypes.commentList,
  onLoadNearbies: AppTypes.anyFunction,
  onLoadComments: AppTypes.anyFunction,
  onUserFavorited: AppTypes.anyFunction,
  onChangeId: AppTypes.anyFunction,
};

export {RoomPage};
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);
