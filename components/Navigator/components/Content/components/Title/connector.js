import { connect } from 'react-redux';
import { getCurrentRouteTitle } from '@shopgate/pwa-common/selectors/router';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  action: state.history.action,
  title: getCurrentRouteTitle(state),
});

export default connect(mapStateToProps);
