/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Portal from '@shopgate/pwa-common/components/Portal';
import * as portals from '@shopgate/pwa-common-commerce/product/constants/Portals';
import FavoritesButton from 'Components/FavoritesButton';
import AddToCartButton from 'Components/AddToCartButton';
import styles from './style';
import connect from './connector';

/**
 * Renders CTA buttons for product page (add to cart + toggle favorites).
 *
 * @param {Object} props Props.
 * @returns {JSX}
 * @constructor
 */
const CTAButtons = (props) => {
  console.warn(props);

  return (
    <div className={styles.buttons}>
      <FavoritesButton
        active={props.isFavorite}
        productId={props.productId}
        className={styles.favButton}
        rippleClassName={styles.ripple}
      />

      {/* ADD TO CART */}
      <Portal name={portals.PRODUCT_ADD_TO_CART_CTA_BEFORE} />
      <Portal
        name={portals.PRODUCT_ADD_TO_CART_CTA}
        props={{
          productId: props.productId,
          styles,
          isOrderable: props.isOrderable,
          isLoading: props.isLoading,
          handleAddToCart: props.handleAddToCart,
          buttonComponent: AddToCartButton,
        }}
      />
      <Portal name={portals.PRODUCT_ADD_TO_CART_CTA_AFTER} />
    </div>
  );
};

CTAButtons.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  handleAddToCart: PropTypes.func,
  isLoading: PropTypes.bool,
  isOrderable: PropTypes.bool,
  productId: PropTypes.string,
};

CTAButtons.defaultProps = {
  handleAddToCart: () => {},
  isLoading: null,
  isOrderable: null,
  productId: null,
};

export default connect(CTAButtons);
