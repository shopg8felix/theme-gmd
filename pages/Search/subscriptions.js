import { UI_NAVIGATOR_SET_TITLE } from '@shopgate/pwa-common/constants/ui';
import { searchWillEnter$, searchWillLeave$ } from '@shopgate/pwa-common-commerce/search/streams';
import getSearchResults from '@shopgate/pwa-common-commerce/search/actions/getSearchResults';
import toggleProgressBar from '../../components/Navigator/actions/toggleProgressBar';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function search(subscribe) {
  subscribe(searchWillEnter$, ({ action, dispatch, UIEvents }) => {
    const { s: searchPhrase } = action.route.query;
    dispatch(getSearchResults(searchPhrase));
    UIEvents.emit(UI_NAVIGATOR_SET_TITLE, searchPhrase);
    dispatch(toggleProgressBar(false));
  });

  subscribe(searchWillLeave$, ({ dispatch }) => {
    dispatch(toggleProgressBar(true));
  });
}
