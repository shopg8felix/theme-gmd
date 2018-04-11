import getPageConfig from '@shopgate/pwa-common/actions/page/getPageConfig';
import { PAGE_ID_INDEX } from '@shopgate/pwa-common/constants/PageIDs';
import { pageRoutePushed$ } from './streams';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function page(subscribe) {
  /**
   * Gets triggered on entering the root category route.
   */
  subscribe(pageRoutePushed$, ({ dispatch }) => {
    dispatch(getPageConfig(PAGE_ID_INDEX));
  });
}
