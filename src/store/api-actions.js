import {
  fillOffers,
  fillNearbies,
  fillComments,
  changeStatus,
  fillOffer,
} from "./action";
import {fillFavorites} from "./action";
import {PostStatus} from "../const";

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(fillOffers(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const fetchOffer = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}`)
    .then(({data}) => dispatch(fillOffer(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const fetchHotelNearby = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(fillNearbies(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const fetchComments = (id) => (dispatch, _getState, api) =>
  api
    .get(`/comments/${id}`)
    .then(({data}) => dispatch(fillComments(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const login = (email, password) => (dispatch, _getState, api) =>
  api
    .post(`/LOGIN`, {email, password})
    .then(() => dispatch(changeStatus()))
    .catch((error) => {
      throw new Error(error);
    });

export const postComment = (id, data) => (dispatch, _getState, api) =>
  api
    .post(`/comments/${id}`, data)
    .then(() => dispatch(fetchComments(id)))
    .catch((error) => {
      throw new Error(error);
    });

export const getFavoriteList = () => (dispatch, _getState, api) =>
  api
    .get(`/favorite`)
    .then(({data}) => dispatch(fillFavorites(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const postFavoriteOffer = (id, status) => (dispatch, _getState, api) =>
  api
    .post(status === PostStatus.ADD ? `favorite/${id}/1` : `favorite/${id}/0`)
    .then(() => dispatch(fetchOffersList()))
    .then(() => dispatch(getFavoriteList()))
    .catch((error) => {
      throw new Error(error);
    });
