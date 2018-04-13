import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from '@shopgate/pwa-common/components/Portal';
import * as portals from '@shopgate/pwa-common-commerce/category/constants/Portals';
import CategoryList from 'Components/CategoryList';
import FilterBar from 'Components/FilterBar';
import View from 'Components/View';
import Products from './components/Products';
import Empty from './components/Empty';
import connect from './connector';

/**
 * The category view component.
 * @returns {JSX}
 */
class Category extends Component {
  static propTypes = {
    category: PropTypes.shape(),
    hasProducts: PropTypes.bool,
    isFilterBarShown: PropTypes.bool,
    isRoot: PropTypes.bool,
  };

  static defaultProps = {
    category: null,
    hasProducts: false,
    isFilterBarShown: true,
    isRoot: true,
  };

  static contextTypes = {
    history: PropTypes.shape(),
    i18n: PropTypes.func,
  };

  /**
   * Returns the current view title.
   * @return {string} The view title.
   */
  get title() {
    const { __ } = this.context.i18n();

    if (this.props.isRoot) {
      return __('titles.categories');
    }

    return this.props.category ? this.props.category.name : '';
  }

  /**
   * Returns the current category ID.
   * @return {string|null}
   */
  get id() {
    return this.props.category ? this.props.category.id : null;
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    return (
      <View title={this.title}>
        {this.props.isFilterBarShown && <FilterBar />}

        {/* CATEGORY LIST */}
        <Portal name={portals.CATEGORY_LIST_BEFORE} props={{ categoryId: this.id }} />
        <Portal name={portals.CATEGORY_LIST} props={{ categoryId: this.id }}>
          <CategoryList categories={this.props.childCategories} prerender={4} />
        </Portal>
        <Portal name={portals.CATEGORY_LIST_AFTER} props={{ categoryId: this.id }} />

        {/* PRODUCT LIST */}
        <Portal name={portals.PRODUCT_LIST_BEFORE} props={{ categoryId: this.id }} />
        <Portal name={portals.PRODUCT_LIST} props={{ categoryId: this.id }}>
          {this.props.hasProducts && <Products />}
        </Portal>
        <Portal name={portals.PRODUCT_LIST_AFTER} props={{ categoryId: this.id }} />

        <Empty
          headlineText="category.no_result.heading"
          bodyText="category.no_result.body"
          searchPhrase={this.title}
        />
      </View>
    );
  }
}

export default connect(Category);
