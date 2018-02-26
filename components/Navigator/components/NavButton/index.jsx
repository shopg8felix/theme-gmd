/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@shopgate/pwa-common/components/Button';
import BurgerIcon from 'Components/icons/BurgerIcon';
import Ripple from 'Components/Ripple';
import connect from './connector';
import styles from './style';

/**
 * The nav icon component for the navigator.
 */
class NavButton extends Component {
  static propTypes = {
    toggleNavDrawer: PropTypes.func.isRequired,
    showIconShadow: PropTypes.bool,
  };

  static defaultProps = {
    showIconShadow: false,
  };

  /**
   * The component only should update if the type changed.
   * @param {Object} nextProps The next props.
   * @returns {boolean}
   */
  shouldComponentUpdate(nextProps) {
    return nextProps.showIconShadow !== this.props.showIconShadow;
  }

  /**
   * Handles a click on the icon.
   */
  handleClick = () => {
    this.props.toggleNavDrawer(true);
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    return (
      <Button
        className={styles}
        onClick={this.handleClick}
      >
        <BurgerIcon />
      </Button>
    );
  }
}

export default connect(NavButton);
