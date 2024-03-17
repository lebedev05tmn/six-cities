import {addOffers, fillNearbies, fillComments, changeStatus} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(addOffers(data)))
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
    .POST(`/LOGIN`, {email, password})
    .then(() => dispatch(changeStatus()))
    .catch((error) => {
      throw new Error(error);
    });

export const postComment = (id, data) => (dispatch, _getState, api) =>
  api
    .POST(`/comments/${id}`, data)
    .then(() => dispatch(fetchComments(id)))
    .catch((error) => {
      throw new Error(error);
    });
