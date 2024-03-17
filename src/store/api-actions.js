import {ActionCreator} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.addOffers(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const fetchHotelNearby = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.fillNearbies(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const fetchComments = (id) => (dispatch, _getState, api) =>
  api
    .get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.fillComments(data)))
    .catch((error) => {
      throw new Error(error);
    });

export const login = (email, password) => (dispatch, _getState, api) => {
  return api
    .post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeStatus()))
    .catch((error) => {
      throw new Error(error);
    });
};

export const postComment = (id, data) => (dispatch, _getState, api) =>
  api
    .post(`/comments/${id}`, data)
    .then(() => dispatch(fetchComments(id)))
    .catch((error) => {
      throw new Error(error);
    });
