import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Backdrop from '@shopgate/pwa-common/components/Backdrop';
import { UI } from '@shopgate/pwa-common/context/';
import styles from './style';
import transition from './transition';

/**
 * The NavDrawer layout component.
 */
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  /**
   * @param {Object} props the component props.
   */
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }

  handleExit = () => {
    this.node.current.scrollTop = 0;
  }

  /**
   * @return {JSX}
   */
  render() {
    return (
      <UI>
        {({ navDrawer, toggleNavDrawer }) => (
          <section data-test-id="NavDrawer">
            <Backdrop
              isVisible={navDrawer}
              level={3}
              onClick={toggleNavDrawer}
              opacity={20}
            />
            <Transition
              in={navDrawer}
              onExited={this.handleExit}
              timeout={300}
            >
              {state => (
                <div
                  className={styles.container}
                  style={transition[state]}
                >
                  <div
                    className={styles.content}
                    ref={this.node}
                  >
                    {this.props.children}
                  </div>
                </div>
              )}
            </Transition>
          </section>
        )}
      </UI>
    );
  }
}

export default Layout;
