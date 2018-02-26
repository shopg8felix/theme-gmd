/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from 'Components/CategoryList';
import View from 'Components/View';
import connect from './connector';

/**
 * The RootCategory component.
 * @returns {JSX}
 */
class RootCategory extends Component {
  static propTypes = {
    category: PropTypes.shape(),
  };

  static defaultProps = {
    category: null,
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const { category } = this.props;
    const categories = (category && category.categories) ? category.categories : null;

    return (
      <View>
        <CategoryList categories={category.categories} />
      </View>
    );
  }
}

export default connect(RootCategory);
