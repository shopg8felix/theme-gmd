import { connect } from 'react-redux';
import { navigate } from '@shopgate/pwa-common/action-creators/history';

/**
 * Maps action dispatchers to the component props.
 * @param {function} dispatch The store dispatcher.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  navigate: (href, historyState) => dispatch(navigate('PUSH', href, historyState)),
});

export default connect(null, mapDispatchToProps);
