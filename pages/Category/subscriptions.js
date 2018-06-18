import { logger } from '@shopgate/pwa-core/helpers';
import { CATEGORY_PATH } from '@shopgate/pwa-common-commerce/category/constants';
import getCategory from '@shopgate/pwa-common-commerce/category/actions/getCategory';
import { getCurrentCategoryId } from '@shopgate/pwa-common-commerce/category/selectors';
import {
  getFiltersFromUrl,
  getAvailableFilters,
  hasActiveFilters,
} from '@shopgate/pwa-common-commerce/filter/selectors';
import setActiveFilters from '@shopgate/pwa-common-commerce/filter/action-creators/setActiveFilters';
import { routeDidEnter, routeDidLeave } from '@shopgate/pwa-common/streams/history';
import getFilters from '@shopgate/pwa-common-commerce/filter/actions/getFilters';
import {
  FILTER_TYPE_MULTISELECT,
  FILTER_TYPE_RANGE,
} from '@shopgate/pwa-common-commerce/filter/constants';
import { didReceiveFilters$ } from '@shopgate/pwa-common-commerce/filter/streams';

let currentPage = false;
/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  const categoryRouteDidEnter$ = routeDidEnter(CATEGORY_PATH);
  const categoryRouteDidLeave$ = routeDidLeave(CATEGORY_PATH);

  /**
   * Gets triggered on entering the filter route.
   */
  subscribe(categoryRouteDidEnter$, ({ dispatch, getState }) => {
    currentPage = true;
    const state = getState();
    const filtersFromUrl = getFiltersFromUrl(state);
    const categoryId = getCurrentCategoryId(state);
    if (!hasActiveFilters(state) && filtersFromUrl) {
      logger.log('Page has filters configured in the url. Fetching filters.');
      dispatch(getFilters());
      return;
    }
    dispatch(getCategory(categoryId));
  });

  subscribe(categoryRouteDidLeave$, () => {
    currentPage = false;
  });

  subscribe(didReceiveFilters$, ({ action, dispatch, getState }) => {
    if (!currentPage) {
      return;
    }
    const state = getState();
    const filtersFromUrl = getFiltersFromUrl(state);
    /**
     * Abort when there are filters configured in url but also there is something already
     * in the state.
     */
    if (!filtersFromUrl || hasActiveFilters(state)) {
      logger.log('Page has no filters in the url. Skipping automatic configuration.');
      return;
    }
    const categoryId = getCurrentCategoryId(state);

    /**
     * Aborting when filters for ca
     */
    if (action.params.categoryId !== categoryId) {
      return;
    }
    const availableFilters = getAvailableFilters(state);
    const filtersFromUrlIds = Object.keys(filtersFromUrl);

    const activeFilters = {};
    availableFilters.forEach((filter) => {
      if (!filtersFromUrlIds.includes(filter.id)) {
        return;
      }

      const matchedFilterFromUrl = filtersFromUrl[filter.id];

      if (filter.type === FILTER_TYPE_MULTISELECT) {
        if (!matchedFilterFromUrl.hasOwnProperty('values')) {
          return;
        }
        activeFilters[filter.id] = {
          ...filter,
          values: matchedFilterFromUrl.values,
        };
      } else if (filter.type === FILTER_TYPE_RANGE) {
        if (!(matchedFilterFromUrl.hasOwnProperty('minimum') && matchedFilterFromUrl.hasOwnProperty('maximum'))) {
          return;
        }
        activeFilters[filter.id] = {
          ...filter,
          minimum: matchedFilterFromUrl.minimum,
          maximum: matchedFilterFromUrl.maximum,
          id: undefined,
        };
      }
    });
    dispatch(setActiveFilters(activeFilters, { categoryId }));
    dispatch(getCategory(categoryId));
  });
}
