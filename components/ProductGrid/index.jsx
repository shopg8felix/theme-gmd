import React from 'react';
import PropTypes from 'prop-types';
import ProductPlaceholder from './Item/Placeholder';
import Layout from './Layout';
import Iterator from './Iterator';
import Item from './Item';

/**
 * @param {Object} props The component props.
 * @return {JSX}
 */
const ProductGrid = ({ products, prerender }) => (
  <Layout>
    {!products.length && [...Array(prerender)].map((value, key) => (
      <Iterator key={`iterator-${key}`} id={key}>
        <ProductPlaceholder />
      </Iterator>
    ))}
    {products.length && products.map(product => (
      <Iterator key={product.id} id={product.id}>
        <Item product={product} />
      </Iterator>
    ))}
  </Layout>
);

ProductGrid.propTypes = {
  prerender: PropTypes.number,
  products: PropTypes.arrayOf(PropTypes.shape()),
};

ProductGrid.defaultProps = {
  prerender: 0,
  products: [],
};

export default ProductGrid;
