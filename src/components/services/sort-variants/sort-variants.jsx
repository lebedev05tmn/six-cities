import React, {memo} from "react";
import {connect} from "react-redux";
import {openOptions, changeFilter} from "../../../store/action";
import {AppFilters} from "../../../const";
import AppTypes from "../../../types/types";

const SortVariants = (props) => {
  const {isOpenOptions, onUserOpen, onUserOption, filterName} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={() => onUserOpen()}
      >
        {filterName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpenOptions && `places__options--opened`
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
  isOpenOptions: INTERFACE.isOpenOptions,
  filterName: DATA.filterName,
});

const mapDispatchToProps = (dispatch) => ({
  onUserOpen: () => dispatch(openOptions()),
  onUserOption: (filter) => dispatch(changeFilter(filter)),
});

SortVariants.propTypes = {
  isOpenOptions: AppTypes.anyFlag,
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
      prevProps.isOpenOptions === nextProps.isOpenOptions
    );
  })
);
