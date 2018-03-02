/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { categoryRoutePushed$ } from './streams';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  /**
   * Gets triggered on entering the category route.
   */
  subscribe(categoryRoutePushed$, () => {
    console.warn('Entered a sub category route');
  });
}
