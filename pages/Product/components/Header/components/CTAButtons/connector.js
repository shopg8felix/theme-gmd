import { connect } from 'react-redux';
import { hasProductData, isProductOrderable } from '@shopgate/pwa-common-commerce/product/selectors/product';
import { isCurrentProductOnFavoriteList } from '@shopgate/pwa-common-commerce/favorites/selectors';
import addProductsToCart from '@shopgate/pwa-common-commerce/cart/actions/addProductsToCart';

/**
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  isFavorite: isCurrentProductOnFavoriteList(state, props),
  isLoading: !hasProductData(state, props),
  isDisabled: !isProductOrderable(state, props),
});

/**
 * @param {Function} dispatch The redux dispatch function.
 * @param {Function} props The component props.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  addToCart: products => dispatch(addProductsToCart(products)),
});

export default connect(mapStateToProps, mapDispatchToProps);
