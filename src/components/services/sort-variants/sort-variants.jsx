import React, {memo} from "react";
import {connect} from "react-redux";
import {openOptions, changeFilter} from "../../../store/action";
import {AppFilters} from "../../../const";
import AppTypes from "../../../types/types";

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
        {Object.values(AppFilters).map((appFilter) => (
          <li
            className={
              filterName === appFilter
                ? `places__option places__option--active`
                : `places__option`
            }
            tabIndex="0"
            key={appFilter}
            onClick={() => {
              onUserOption(appFilter);
            }}
          >
            {appFilter}
          </li>
        ))}
      </ul>
    </form>
  );
};

const mapStateToProps = ({INTERFACE, DATA}) => ({
  openOptions: INTERFACE.openOptions,
  filterName: DATA.filterName,
});

const mapDispatchToProps = (dispatch) => ({
  onUserOpen(isOpened) {
    dispatch(openOptions(isOpened));
  },
  onUserOption(filter) {
    dispatch(changeFilter(filter));
  },
});

SortVariants.propTypes = {
  openOptions: AppTypes.anyFlag,
  onUserOpen: AppTypes.anyFunction,
  onUserOption: AppTypes.anyFunction,
  filterName: AppTypes.anyInput,
};

export {SortVariants};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  memo(SortVariants, (prevProps, nextProps) => {
    return (
      prevProps.filterName === nextProps.filterName &&
      prevProps.openOptions === nextProps.openOptions
    );
  })
);
