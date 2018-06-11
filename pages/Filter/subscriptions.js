import { FILTER_PATH } from '@shopgate/pwa-common-commerce/filter/constants';
import {
  filterRouteDidEnter$,
  filterRouteDidLeave$,
} from '@shopgate/pwa-common-commerce/filter/streams';
import {
  setFilterOpened,
  setFilterClosed,
} from 'Components/Navigator/action-creators';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function filter(subscribe) {
  subscribe(filterRouteDidLeave$, ({ dispatch, pathname }) => {
    if (!pathname.startsWith(FILTER_PATH)) {
      dispatch(setFilterClosed());
    }
  });

  subscribe(filterRouteDidEnter$, ({ dispatch, prevPathname }) => {
    if (!prevPathname.startsWith(FILTER_PATH)) {
      dispatch(setFilterOpened());
    }
  });
}
