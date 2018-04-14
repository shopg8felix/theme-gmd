// import { connect } from 'react-redux';
import connect from '@shopgate/pwa-common/connect';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  configs: state.page,
});

/**
 * 
 * @param {*} next 
 * @param {*} prev 
 */
const areStatesEqual = (next, prev) => {
  const configChange = Object.keys(next.page).length !== Object.keys(prev.page).length;

  if (configChange) {
    return false;
  }

  const receivedConfig = Object.keys(next.page).every(config => (
    next.page[config].isFetching === prev.page[config].isFetching
  ));

  if (!receivedConfig) {
    return false;
  }

  return true;
};

export default connect(mapStateToProps, null, null, { areStatesEqual });
