// import { connect } from 'react-redux';
import connect from '@shopgate/pwa-common/connect';
import {
  getCurrentCategory,
  getChildCategoriesById,
  // getCategoryProductsById,
} from '@shopgate/pwa-common-commerce/category/selectors';

/**
 * @param {Object} state The current application state.
 * @param {Object} props The componen props.
 * @return {Object}
 */
const mapStateToProps = (state, props) => ({
  category: getCurrentCategory(state, props),
  childCategories: getChildCategoriesById(state, props),
  // products: getCategoryProductsById(state, props),
});

/**
 * 
 * @param {*} next 
 * @param {*} prev 
 */
const areStatePropsEqual = (next, prev) => {
  // If there are no categories previously or now, stop.
  if (!prev.childCategories && !next.childCategories) {
    return true;
  }

  // If there are new child categories then run.
  if (!prev.childCategories && next.childCategories) {
    return false;
  }

  // Check for next categories and if the number received is the same.
  return next.childCategories && next.childCategories.length === prev.childCategories.length;
};

export default connect(mapStateToProps, null, null, { areStatePropsEqual });
