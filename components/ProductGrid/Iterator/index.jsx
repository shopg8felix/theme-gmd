import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@shopgate/pwa-common/components/Grid';
import styles from './style';

/**
 * The Product Grid Iterator component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const Iterator = props => (
  <Grid.Item
    key={props.id}
    itemProp="itemListElement"
    itemScope
    itemType="http://schema.org/ListItem"
    className={styles.item}
  >
    {props.children}
  </Grid.Item>
);

Iterator.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Iterator.defaultProps = {
  children: null,
};

export default Iterator;
