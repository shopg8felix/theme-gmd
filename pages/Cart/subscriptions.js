import { UI_NAVIGATOR_SET_TITLE } from '@shopgate/pwa-common/constants/ui';
import toggleCartIcon from 'Components/Navigator/actions/toggleCartIcon';
import enableNavigatorSearch from 'Components/Navigator/actions/enableNavigatorSearch';
import disableNavigatorSearch from 'Components/Navigator/actions/disableNavigatorSearch';
import { cartWillEnter$, cartWillLeave$ } from '@shopgate/pwa-common-commerce/cart/streams';

/**
 * Cart subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function cart(subscribe) {
  subscribe(cartWillEnter$, ({ dispatch, UIEvents }) => {
    UIEvents.emit(UI_NAVIGATOR_SET_TITLE, 'titles.cart');
    dispatch(toggleCartIcon(false));
    dispatch(disableNavigatorSearch());
  });

  subscribe(cartWillLeave$, ({ dispatch }) => {
    dispatch(toggleCartIcon(true));
    dispatch(enableNavigatorSearch());
  });
}
