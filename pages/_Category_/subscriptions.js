import fetchCategory from '@shopgate/pwa-common-commerce/category/actions/fetchCategory';
import { categoryRoutePushed$ } from './streams';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  // Const categoryRouteDidEnter$ = routeDidEnter(CATEGORY_PATH);

  // /**
  //  * Gets triggered on entering the filter route.
  //  */
  // Subscribe(categoryRouteDidEnter$, ({ dispatch, getState }) => {
  //   Const state = getState();
  //   Dispatch(getCategory(getCurrentCategoryId(state)));
  // });

  /**
 * Gets triggered on entering the filter route.
 */
  subscribe(categoryRoutePushed$, ({ dispatch, action }) => {
    const { state: { categoryId } } = action.stack[action.stack.length - 1];
    dispatch(fetchCategory(categoryId));
  });
}
