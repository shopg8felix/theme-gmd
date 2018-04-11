import getCategory from '@shopgate/pwa-common-commerce/category/actions/getCategory';
import { rootCategoryRoutePushed$ } from './streams';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  /**
   * Gets triggered on entering the root category route.
   */
  subscribe(rootCategoryRoutePushed$, ({ dispatch }) => {
    dispatch(getCategory());
  });
}
