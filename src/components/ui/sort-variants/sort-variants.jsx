import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import {AppFilters} from "../../../const";

const SortVariants = (props) => {
  const {openOptions, onUserOpen, onUserOption, filterName} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => onUserOpen(!openOptions)}
      >
        {filterName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          openOptions && `places__options--opened`
        }`}
      >
        <li
          className="places__option places__option--active"
          tabIndex="0"
          onClick={() => {
            onUserOption(AppFilters.POPULAR);
          }}
        >
          {AppFilters.POPULAR}
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => {
            onUserOption(AppFilters.LOW_PRICE);
          }}
        >
          {AppFilters.LOW_PRICE}
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => onUserOption(AppFilters.HIGH_PRICE)}
        >
          {AppFilters.HIGH_PRICE}
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={() => onUserOption(AppFilters.RATING)}
        >
          {AppFilters.RATING}
        </li>
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  openOptions: state.openOptions,
  filterOption: state.filterOption,
  filterName: state.filterName,
});

const mapDispatchToProps = (dispatch) => ({
  onUserOpen(isOpened) {
    dispatch(ActionCreator.openOptions(isOpened));
  },
  onUserOption(filter) {
    dispatch(ActionCreator.changeFilter(filter));
  },
});

export {SortVariants};
export default connect(mapStateToProps, mapDispatchToProps)(SortVariants);
