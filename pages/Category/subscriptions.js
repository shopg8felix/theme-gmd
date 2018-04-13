import fetchCategory from '@shopgate/pwa-common-commerce/category/actions/fetchCategory';
import fetchCategoryProducts from '@shopgate/pwa-common-commerce/category/actions/fetchCategoryProducts';
import fetchCategoryChildren from '@shopgate/pwa-common-commerce/category/actions/fetchCategoryChildren';
import { categoryDidEnter$, categoryReceived$ } from '@shopgate/pwa-common-commerce/category/streams';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  subscribe(categoryDidEnter$, ({ dispatch, action }) => {
    const { route: { state: { categoryId } } } = action;
    dispatch(fetchCategory(categoryId));
  });

  subscribe(categoryReceived$, ({ dispatch, action: { categoryData, categoryId } }) => {
    if (categoryData.childrenCount && !categoryData.children.length) {
      dispatch(fetchCategoryChildren(categoryId));
    }

    if (categoryData.productCount) {
      dispatch(fetchCategoryProducts(categoryId));
    }
  });
}
