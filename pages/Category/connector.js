import { connect } from 'react-redux';
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

export default connect(mapStateToProps);
