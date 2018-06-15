import React, { Component } from 'react';
import { UIEvents } from '@shopgate/pwa-core';
import I18n from '@shopgate/pwa-common/components/I18n';
import styles from './style';

/**
 * The Navigator Title component.
 */
class Title extends Component {
  /**
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      title: '',
    };

    UIEvents.addListener('UI_NAVIGATOR_SET_TITLE', this.setTitle);
    UIEvents.addListener('UI_NAVIGATOR_TOGGLE_TITLE', this.setVisibility);
  }

  /**
   * @param {Object} nextProps The next component props.
   * @param {Object} nextState The next component state.
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.visible !== nextState.visible
      || this.state.title !== nextState.title
    );
  }

  /**
   * @param {string} title The next title.
   */
  setTitle = (title) => {
    if (this.state.title === title) {
      return;
    }

    this.setState({ title });
  }

  /**
   * @param {boolean} visible The next visiblile state.
   */
  setVisibility = (visible) => {
    if (this.state.visible === visible) {
      return;
    }

    this.setState({ visible });
  }

  /**
   * @returns {JSX}
   */
  render() {
    if (!this.state.visible) {
      return null;
    }

    return (
      <div className={styles} data-test-id={`title: ${this.state.title}`}>
        <I18n.Text string={this.state.title} />
      </div>
    );
  }
}

export default Title;
