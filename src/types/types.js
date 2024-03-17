import PropTypes from "prop-types";

const offerPropTypes = PropTypes.shape({
  bedrooms: PropTypes.number,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
    name: PropTypes.string,
  }),
  description: PropTypes.string,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    avatar_url: PropTypes.string,
    id: PropTypes.number,
    is_pro: PropTypes.bool,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  images: PropTypes.arrayOf(PropTypes.string),
  is_favorite: PropTypes.bool,
  is_premium: PropTypes.bool,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  max_adults: PropTypes.number,
  preview_image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string,
});

const commentPropTypes = {
  comment: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.number,
  rating: PropTypes.number,
  user: PropTypes.shape({
    avatar_url: PropTypes.string,
    id: PropTypes.number,
    is_pro: PropTypes.bool,
    name: PropTypes.string,
  }),
};

const AppTypes = {
  anyFunction: PropTypes,
  anyFlag: PropTypes.bool,
  offer: offerPropTypes,
  offerData: PropTypes.arrayOf(offerPropTypes),
  component: PropTypes.element,
  city: PropTypes.string,
  commentList: PropTypes.arrayOf(commentPropTypes),
  comment: commentPropTypes,
  anyInput: PropTypes.string,
  rating: PropTypes.number,
  anyId: PropTypes.number,
};

export default AppTypes;

export {AppTypes};
