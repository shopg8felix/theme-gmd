import { categoryRoutePushed$ } from './streams';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  // const categoryRouteDidEnter$ = routeDidEnter(CATEGORY_PATH);

  // /**
  //  * Gets triggered on entering the filter route.
  //  */
  // subscribe(categoryRouteDidEnter$, ({ dispatch, getState }) => {
  //   const state = getState();
  //   dispatch(getCategory(getCurrentCategoryId(state)));
  // });

  /**
 * Gets triggered on entering the filter route.
 */
  subscribe(categoryRoutePushed$, ({ dispatch, getState }) => {
    console.warn('Sub Category route entered');
  });
}
