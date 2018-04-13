import event from '@shopgate/pwa-core/classes/Event';
import conductor from '@virtuous/conductor';
import * as events from '@virtuous/conductor-events';
import getRouteById from '@virtuous/conductor-helpers/getRouteById';
import {
  routeWillEnter,
  routeDidEnter,
  routeWillLeave,
  routeDidLeave,
} from '@shopgate/pwa-common/action-creators/router';
import { EVENT_PIPELINE_ERROR } from '@shopgate/pwa-core/constants/Pipeline';
import { appDidStart$ } from '@shopgate/pwa-common/streams/app';
import pipelineErrorDialog from 'Components/Dialog/actions/pipelineErrorDialog';
import navigate from '@shopgate/pwa-common/action-creators/history';

/**
 * App subscriptions.
 * @param {Function} subscribe The subscribe function.
 */
export default function app(subscribe) {
  /**
   * Gets triggered when the app starts.
   */
  subscribe(appDidStart$, ({ dispatch }) => {
    // Dispatch(navigate('PUSH', '/'));
    conductor.push('/');
    // Add event callbacks.
    event.addCallback(EVENT_PIPELINE_ERROR, params => dispatch(pipelineErrorDialog(params)));

    // Add router callbacks.
    // TODO: On route change, handle both route that came in and route that left
    // TODO: Take care about replace
    // TODO: Add complete route objects to actions instead of a single id
    events.onWillPush(id => dispatch(routeWillEnter(getRouteById(id), 'PUSH')));
    events.onDidPush(id => dispatch(routeDidEnter(getRouteById(id), 'PUSH')));
    events.onWillPop(id => dispatch(routeWillLeave(getRouteById(id), 'POP')));
    events.onDidPop(id => dispatch(routeDidLeave(getRouteById(id), 'POP')));
    events.onWillReplace(id => dispatch(routeWillLeave(getRouteById(id), 'REPLACE')));
    events.onDidReplace(id => dispatch(routeDidLeave(getRouteById(id), 'REPLACE')));
  });
}
