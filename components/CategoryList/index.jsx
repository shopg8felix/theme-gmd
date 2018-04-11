import React from 'react';
import PropTypes from 'prop-types';
import { bin2hex } from '@shopgate/pwa-common/helpers/data';
import Placeholder from '@shopgate/pwa-common/components/Placeholder';
import List from 'Components/List';

/**
 * The category list component.
 * @param {Array} categories The categories to display.
 * @returns {JSX}
 */
const CategoryList = ({ categories, prerender }) => {
  if (!categories) {
    return (
      <List>
        {[...Array(prerender)].map(() => (
          <Placeholder
            height={24}
            key="0"
            left={72}
            top={17}
            width={220}
          />
        ))}
      </List>
    );
  }

  return (
    <List>
      {categories.map(category => (
        <List.Item
          key={category.id}
          link={`/category/${bin2hex(category.id)}`}
          linkState={{
            categoryId: category.id,
            title: category.name,
          }}
          title={category.name}
        />
      ))}
    </List>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape()),
  prerender: PropTypes.number,
};

CategoryList.defaultProps = {
  categories: null,
  prerender: 0,
};

export default CategoryList;