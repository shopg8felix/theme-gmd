import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PAGE_ID_INDEX } from '@shopgate/pwa-common/constants/PageIDs';
import Widgets from '@shopgate/pwa-common/components/Widgets';
import Portal from '@shopgate/pwa-common/components/Portal';
import {
  PAGE_CONTENT_BEFORE,
  PAGE_CONTENT,
  PAGE_CONTENT_AFTER,
} from '@shopgate/pwa-common/constants/Portals';
import View from 'Components/View';
import widgets from 'Extensions/widgets';
import connect from './connector';
import styles from './style';

/**
 * The homepage view component.
 * @returns {JSX}
 */
class Page extends Component {
  static propTypes = {
    configs: PropTypes.shape(),
    style: PropTypes.shape(),
  };

  static defaultProps = {
    configs: {},
    style: null,
  };

  /**
   * Returns the current view title.
   * @return {string}
   */
  get title() {
    const { title } = this.props.configs[PAGE_ID_INDEX];

    if (!title) {
      return '';
    }

    return title;
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    if (!this.props.configs) {
      return null;
    }

    const pageConfig = this.props.configs[PAGE_ID_INDEX];

    if (!pageConfig) {
      return null;
    }

    return (
      <View className={styles.container} style={this.props.style} title={this.title}>
        <Portal name={PAGE_CONTENT_BEFORE} props={{ id: PAGE_ID_INDEX }} />
        <Portal name={PAGE_CONTENT} props={{ id: PAGE_ID_INDEX }}>
          <div className={styles.widgetWrapper}>
            <Widgets components={widgets} widgets={pageConfig.widgets} />
          </div>
        </Portal>
        <Portal name={PAGE_CONTENT_AFTER} props={{ id: PAGE_ID_INDEX }} />
      </View>
    );
  }
}

export default connect(Page);
