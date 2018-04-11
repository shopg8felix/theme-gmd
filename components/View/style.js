import { css } from 'glamor';
import colors from 'Styles/colors';
import variables from 'Styles/variables';

const container = css({
  position: 'absolute',
  top: 0,
  left: 0,
  background: colors.light,
  width: '100%',
  height: '100%',
  zIndex: 1,
}).toString();

/**
 * Creates the content style.
 * @param {boolean} hasNavigator Whether to add the top offset when the navigator is visible.
 * @return {string} The content style class.
 */
const content = (hasNavigator = true) => css({
  background: colors.light,
  overflow: 'auto',
  overflowScrolling: 'touch',
  WebkitOverflowScrolling: 'touch',
  width: '100%',
  position: 'absolute',
  top: hasNavigator ? variables.navigator.height : 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
}).toString();

export default {
  container,
  content,
};
