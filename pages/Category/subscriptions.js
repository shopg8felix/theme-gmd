/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import getCategory from '@shopgate/pwa-common-commerce/category/actions/getCategory';
import { getCurrentRoute } from '@shopgate/pwa-common/selectors/router';
import {
  categoryRoutePushed$,
  rootCategoryRoutePushed$,
} from './streams';

/**
 * @param {Function} subscribe The subscribe function.
 */
export default function category(subscribe) {
  /**
   * Gets triggered on entering the category route.
   */
  subscribe(categoryRoutePushed$, ({ dispatch, getState }) => {
    console.warn('Entered a sub category route');
  });

  /**
   * Gets triggered on entering the root category route.
   */
  subscribe(rootCategoryRoutePushed$, ({ dispatch, getState }) => {
    const route = getCurrentRoute(getState());
    const categoryId = (route && route.state.categoryId) ? route.state.categoryId : null;

    dispatch(getCategory(categoryId));
  });
}
