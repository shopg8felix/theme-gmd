import { UI_NAVIGATOR_SET_TITLE } from '@shopgate/pwa-common/constants/ui';
import fetchCategory from '@shopgate/pwa-common-commerce/category/actions/fetchCategory';
import { hex2bin } from '@shopgate/pwa-common/helpers/data';
import { categoryWillEnter$, receivedVisibleCategory$ } from './streams';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  subscribe(categoryWillEnter$, ({ action, dispatch, UIEvents }) => {
    const { title } = action.route.state;

    dispatch(fetchCategory(hex2bin(action.route.params.categoryId)));

    if (title) {
      UIEvents.emit(UI_NAVIGATOR_SET_TITLE, title);
    }
  });

  subscribe(receivedVisibleCategory$, ({ action, UIEvents }) => {
    UIEvents.emit(UI_NAVIGATOR_SET_TITLE, action.categoryData.name);
  });
}
