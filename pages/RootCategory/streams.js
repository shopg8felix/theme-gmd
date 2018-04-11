import { conductorDidPush$ } from '@shopgate/pwa-common/streams/router';

/**
 * Gets triggered  when the root category route is pushed.
 * @type {Observable}
 */
export const rootCategoryRoutePushed$ = conductorDidPush$
  .filter(({ action: { stack } }) => stack[stack.length - 1].pathname === '/category');
