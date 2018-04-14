// import { connect } from 'react-redux';
import connect from '@shopgate/pwa-common/connect';
import { getRootCategories } from '@shopgate/pwa-common-commerce/category/selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  category: getRootCategories(state),
});

/**
 * 
 * @param {*} next 
 * @param {*} prev 
 */
const areStatesEqual = (next, prev) => {
  const nextLength = Object.keys(next.category.rootCategories).length;
  const prevLength = Object.keys(prev.category.rootCategories).length;
  console.error(prevLength, nextLength);
  return nextLength === prevLength;
};

export default connect(mapStateToProps, null, null, { areStatesEqual });
