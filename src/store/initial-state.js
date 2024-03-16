import {AppFilters} from "../const";

const initialState = {
  city: `Paris`,
  offers: [],
  hoverCardId: null,
  openOptions: false,
  filterName: AppFilters.POPULAR,
  isDataLoaded: false,
  nearbies: [],
  isNearbyLoaded: false,
  comments: [],
  isCommentsLoaded: false,
  authorizationStatus: false,
  email: ``,
  password: ``,
  comment: ``,
  rating: 0,
};

export default initialState;
