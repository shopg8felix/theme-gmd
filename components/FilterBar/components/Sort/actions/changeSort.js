import changeSortOrder from '@shopgate/pwa-common-commerce/product/actions/changeSortOrder';
import { getSortOrder } from '@shopgate/pwa-common/selectors/history';
import fetchCategoryProducts from '@shopgate/pwa-common-commerce/category/actions/fetchCategoryProducts';
import setViewScrollToTop from 'Components/Navigator/actions/setViewScrollToTop';

/**
 * Changes the sort order of the products.
 * @param {string} newSort The new sort order value.
 * @return {Function} A redux thunk.
 */
const changeSort = newSort => (dispatch, getState) => {
  const state = getState();
  const oldSort = getSortOrder(state);

  if (newSort === oldSort) {
    return;
  }

  // Change the sort order
  dispatch(changeSortOrder(newSort));

  // Fetch new products based on the sort order.
  dispatch(fetchCategoryProducts(0, 30, newSort));

  // Reset the scroll top position of the page.
  dispatch(setViewScrollToTop());
};

export default changeSort;
