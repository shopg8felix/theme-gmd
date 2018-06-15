import { css } from 'glamor';
import variables from 'Styles/variables';

export default css({
  position: 'absolute',
  top: '.65em',
  left: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  width: '100%',
  padding: `0 ${variables.gap.big}px`,
}).toString();
