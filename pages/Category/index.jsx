import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import View from 'Components/View';
import CategoryList from 'Components/CategoryList';
import ProductGrid from 'Components/ProductGrid';
import connect from './connector';

/**
 * @param {Object} props The component props.
 * @return {JSX}
 */
const Category = ({
  category,
  childCategories,
  products,
  title,
}) => (
  <View title={title}>
    {(category && category.childrenCount) ? (
      <CategoryList prerender={category.childrenCount} categories={childCategories} />
    ) : null}
    <ProductGrid products={products} prerender={8} />
  </View>
);

Category.propTypes = {
  category: PropTypes.shape(),
  childCategories: PropTypes.arrayOf(PropTypes.shape()),
  products: PropTypes.arrayOf(PropTypes.shape()),
  title: PropTypes.string,
};

Category.defaultProps = {
  category: null,
  childCategories: null,
  products: [],
  title: null,
};

export default connect(Category);
