/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import event from '@shopgate/pwa-core/classes/Event';
import * as events from '@virtuous/conductor-events';
import {
  routeWillEnter,
  routeDidEnter,
  routeWillLeave,
  routeDidLeave,
} from '@shopgate/pwa-common/action-creators/router';
import { EVENT_PIPELINE_ERROR } from '@shopgate/pwa-core/constants/Pipeline';
import { appDidStart$ } from '@shopgate/pwa-common/streams/app';
import pipelineErrorDialog from 'Components/Dialog/actions/pipelineErrorDialog';

/**
 * App subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function app(subscribe) {
  /**
   * Gets triggered when the app starts.
   */
  subscribe(appDidStart$, ({ dispatch }) => {
    // Add event callbacks.
    event.addCallback(EVENT_PIPELINE_ERROR, params => dispatch(pipelineErrorDialog(params)));

    // Add router callbacks.
    // TODO: On route change, handle both route that came in and route that left
    // TODO: Take care about replace
    // TODO: Add complete route objects to actions instead of a single id
    events.onWillPush(id => dispatch(routeWillEnter(id)));
    events.onDidPush(id => dispatch(routeDidEnter(id)));
    events.onWillPop(id => dispatch(routeWillLeave(id)));
    events.onDidPop(id => dispatch(routeDidLeave(id)));
  });
}
