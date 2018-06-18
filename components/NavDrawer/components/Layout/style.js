import { css } from 'glamor';
import colors from 'Styles/colors';

const duration = 300;
const easing = 'cubic-bezier(0.25, 0.1, 0.25, 1)';

const container = css({
  bottom: 0,
  height: '100vh',
  maxWidth: '67vw',
  position: 'fixed',
  top: 0,
  transition: `transform ${duration}ms ${easing}`,
  width: '100%',
  willChange: 'transform',
  zIndex: 3,
});

const content = css({
  background: colors.light,
  color: colors.dark,
  height: '100%',
  overflowY: 'scroll',
  paddingBottom: 'var(--safe-area-inset-bottom)',
  WebkitOverflowScrolling: 'touch',
});

export default {
  container,
  content,
};
