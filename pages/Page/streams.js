import { conductorDidPush$ } from '@shopgate/pwa-common/streams/router';
import { INDEX_PATH } from '@shopgate/pwa-common/constants/RoutePaths';

/**
 * Gets triggered  when the page route is pushed.
 * @type {Observable}
 */
export const pageRoutePushed$ = conductorDidPush$
  .filter(({ action: { stack } }) => stack[stack.length - 1].pathname === INDEX_PATH);
