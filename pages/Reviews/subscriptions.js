import { UI_NAVIGATOR_SET_TITLE } from '@shopgate/pwa-common/constants/ui';
import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import fetchReviews from '@shopgate/pwa-common-commerce/reviews/actions/fetchReviews';
import { reviewsWillEnter$, reviewsWillLeave$ } from '@shopgate/pwa-common-commerce/reviews/streams';
import disableNavigatorSearch from 'Components/Navigator/actions/disableNavigatorSearch';
import enableNavigatorSearch from 'Components/Navigator/actions/enableNavigatorSearch';
import { REVIEW_ITEMS_PER_PAGE } from './constants';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function reviews(subscribe) {
  subscribe(reviewsWillEnter$, ({ action, dispatch, UIEvents }) => {
    UIEvents.emit(UI_NAVIGATOR_SET_TITLE, 'titles.reviews');

    dispatch(disableNavigatorSearch());
    dispatch(fetchReviews(hex2bin(action.route.params.productId), REVIEW_ITEMS_PER_PAGE));
  });

  subscribe(reviewsWillLeave$, ({ dispatch }) => {
    dispatch(enableNavigatorSearch());
  });
}
