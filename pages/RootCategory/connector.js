import { connect } from 'react-redux';
import { getRootCategories } from '@shopgate/pwa-common-commerce/category/selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
const mapStateToProps = state => ({
  category: getRootCategories(state),
});

export default connect(mapStateToProps);
