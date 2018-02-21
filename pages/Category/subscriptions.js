/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import getCategory from '@shopgate/pwa-common-commerce/category/actions/getCategory';
import { rootCategoryRoutePushed$ } from './streams';

/**
 * Filter subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  /**
   * Gets triggered on entering the filter route.
   */
  subscribe(rootCategoryRoutePushed$, ({ dispatch }) => {
    dispatch(getCategory());
  });
}
