import { UI_NAVIGATOR_SET_TITLE } from '@shopgate/pwa-common/constants/ui';
import fetchRootCategories from '@shopgate/pwa-common-commerce/category/actions/fetchRootCategories';
import { rootCategoryWillEnter$ } from './streams';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  subscribe(rootCategoryWillEnter$, ({ dispatch, UIEvents }) => {
    dispatch(fetchRootCategories());
    UIEvents.emit(UI_NAVIGATOR_SET_TITLE, 'titles.categories');
  });
}
