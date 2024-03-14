import {OfferData} from "../mocks/mock-data";
import {AppFilters} from "../const";

const initialState = {
  city: "Amsterdam",
  offers: OfferData,
  hoverCardId: null,
  openOptions: false,
  filterName: AppFilters.POPULAR,
};

export default initialState;
