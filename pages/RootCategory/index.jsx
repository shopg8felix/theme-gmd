/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from 'Components/CategoryList';
import View from 'Components/View';
import connect from './connector';

/**
 * The RootCategory component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
const RootCategory = ({ category }) => {
  const categories = (category && category.categories) ? category.categories : null;

  return (
    <View>
      <CategoryList
        categories={categories}
        prerender={8}
      />
    </View>
  );
};

RootCategory.propTypes = {
  category: PropTypes.shape(),
};

RootCategory.defaultProps = {
  category: null,
};

export default connect(RootCategory);
