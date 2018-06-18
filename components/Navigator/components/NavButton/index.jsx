import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UIEvents } from '@shopgate/pwa-core';
import { UI_NAVDRAWER_TOGGLE } from '@shopgate/pwa-common/constants/ui';
import Button from '@shopgate/pwa-common/components/Button';
import BurgerIcon from '@shopgate/pwa-ui-shared/icons/BurgerIcon';
import { UI } from '@shopgate/pwa-common/context';
import styles from './style';

/**
 * The NavButton component.
 */
class NavButton extends Component {

  /**
   * Handles a click on the icon.
   */
  handleClick = () => {
    UIEvents.emit(UI_NAVDRAWER_TOGGLE, true);
    this.props.toggleDrawer(true);
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    return (
      <Button className={styles} onClick={this.handleClick}>
        <BurgerIcon />
      </Button>
    );
  }
}

export default () => (
  <UI>
    {({ toggleNavDrawer }) => <NavButton toggleDrawer={toggleNavDrawer} />}
  </UI>
);
