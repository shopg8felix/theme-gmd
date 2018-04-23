import { main$ } from '@shopgate/pwa-common/streams/main';
import { conductorDidPush$ } from '@shopgate/pwa-common/streams/router';
import { RECEIVE_CATEGORY } from '@shopgate/pwa-common-commerce/category/constants';

/**
 * Gets triggered  when the root category route is pushed.
 * @type {Observable}
 */
export const categoryRoutePushed$ = conductorDidPush$
  .filter(({ action: { stack } }) => stack[stack.length - 1].pathname.startsWith('/category/'));

export const categoryReceived$ = main$
  .filter(({ action }) => action.type === RECEIVE_CATEGORY);
