import {ActionCreator} from "./action";

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.addOffers(data)))
    .catch((error) => console.error(`Error fetching offers list:`, error));

export const fetchHotelNearby = (id) => (dispatch, _getState, api) =>
  api
    .get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.fillNearbies(data)))
    .catch((error) => console.error(`Error fetching nearby hotels:`, error));

export const fetchComments = (id) => (dispatch, _getState, api) =>
  api
    .get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.fillComments(data)))
    .catch((error) => console.error(`Error fetching comments:`, error));

export const login = (email, password) => (dispatch, _getState, api) => {
  return api
    .post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.changeStatus()))
    .catch((error) => console.error(`Error logging in:`, error));
};

export const postComment = (id, data) => (dispatch, _getState, api) =>
  api
    .post(`/comments/${id}`, data)
    .then(() => dispatch(fetchComments(id)))
    .catch((error) => console.error(`Error posting comment:`, error));
