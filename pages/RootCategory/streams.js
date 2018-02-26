/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { conductorDidPush$ } from '@shopgate/pwa-common/streams/history';

/**
 * Gets triggered  when the root category route is pushed.
 * @type {Observable}
 */
export const rootCategoryRoutePushed$ = conductorDidPush$
  .filter(({ action: { stack } }) => stack[stack.length - 1].pathname === '/category');
