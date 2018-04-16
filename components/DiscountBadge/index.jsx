import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';

/**
 * The discount badge component.
 * @param {Object} props The component props
 * @param {string} [props.className] Additional CSS style definitions
 * @param {string} props.text The text contents of the component.
 * @returns {JSX}
 */
const DiscountBadge = ({
  text, className, display, discount,
}) => (
  <span className={`${styles[display]} ${className}`}>
    <I18n.Text
      string={text}
      params={[discount]}
    />
  </span>
);

DiscountBadge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  discount: PropTypes.number,
  display: PropTypes.oneOf(Object.keys(styles)),
};

DiscountBadge.defaultProps = {
  className: '',
  discount: null,
  display: 'small',
};

export default DiscountBadge;
