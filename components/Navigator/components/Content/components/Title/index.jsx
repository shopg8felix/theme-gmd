import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { UIEvents } from '@shopgate/pwa-core';
import { UI_NAVIGATOR_TOGGLE_TITLE } from '@shopgate/pwa-common/constants/ui';
import I18n from '@shopgate/pwa-common/components/I18n';
import { UI } from '@shopgate/pwa-common/context';
import styles from './style';

/**
 * The Navigator Title component.
 */
class Title extends Component {
  static propTypes = {
    title: PropTypes.string,
  }

  static defaultProps = {
    title: '',
  }

  /**
   * @param {Object} props The component props.
   */
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      title: props.title,
    };

    UIEvents.addListener(UI_NAVIGATOR_TOGGLE_TITLE, this.setVisibility);
  }

  /**
   * @param {Object} nextProps The next component props.
   */
  componentWillReceiveProps(nextProps) {
    if (this.state.title === nextProps.title) {
      return;
    }

    this.setState({
      title: nextProps.title,
    });
  }

  /**
   * @param {Object} nextProps The next component props.
   * @param {Object} nextState The next component state.
   * @return {boolean}
   */
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.visible !== nextState.visible ||
      this.state.title !== nextState.title
    );
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

export default () => (
  <UI>
    {({ title }) => (
      <Title title={title} />
    )}
  </UI>
);
