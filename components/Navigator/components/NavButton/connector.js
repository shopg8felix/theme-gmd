import { connect } from 'react-redux';
import { navigate } from '@shopgate/pwa-common/action-creators/history';
import toggleNavDrawer from '../../actions/toggleNavDrawer';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  action: state.history.action,
  filterOpen: state.navigator.filterOpen,
  filterAttributeOpen: state.navigator.filterAttributeOpen,
  loginOpen: state.navigator.loginOpen,
  path: state.history.pathname,
  showIconShadow: state.navigator.showIconShadow,
});

/**
 * Maps action dispatchers to the component props.
 * @param {function} dispatch The store dispatcher.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch(navigate('POP')),
  toggleNavDrawer: active => dispatch(toggleNavDrawer(active)),
});

export default connect(mapStateToProps, mapDispatchToProps);
