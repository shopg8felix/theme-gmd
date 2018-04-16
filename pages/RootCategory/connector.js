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
const areStatePropsEqual = (next, prev) => !(!prev.category && next.category);

export default connect(mapStateToProps, null, null, { areStatePropsEqual });
