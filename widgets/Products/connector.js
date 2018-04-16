// import { connect } from 'react-redux';
import connect from '@shopgate/pwa-common/connect';
import getProductsByQuery from '@shopgate/pwa-common-commerce/product/actions/getProductsByQuery';
import {
  getProductsResult,
  getProductsFetchingState,
} from '../selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component properties.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => {
  const params = [
    state,
    props.settings.queryType,
    {
      sort: props.settings.sortOrder,
      value: props.settings.queryParams,
    },
    props.id,
  ];

  return {
    ...getProductsResult(...params),
    isFetching: getProductsFetchingState(...params),
  };
};

/**
 * Maps the contents of the state to the component props.
 * @param  {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  getProducts: (type, value, options, id) => (
    dispatch(getProductsByQuery(type, value, options, id))
  ),
});

/**
 * 
 * @param {*} next 
 * @param {*} prev 
 */
const areStatePropsEqual = (next, prev) => (
  next.products.length === prev.products.length
);

export default connect(mapStateToProps, mapDispatchToProps, null, { areStatePropsEqual });
