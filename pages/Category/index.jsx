import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import NoBackgroundRender from '@shopgate/pwa-common/components/Router/components/NoBackgroundRender';
import CategoryList from 'Components/CategoryList';
import FilterBar from 'Components/FilterBar';
import NoResults from 'Components/NoResults';
import View from 'Components/View';
import ViewContent from 'Components/ViewContent';
import {
  GRID_VIEW,
  LIST_VIEW,
  ITEMS_PER_LOAD,
} from './constants';
import connect from './connector';

/**
 * The category view component.
 * @returns {JSX}
 */
class Category extends Component {
  static propTypes = {
    isRoot: PropTypes.bool.isRequired,
    params: PropTypes.shape().isRequired,
    category: PropTypes.shape(),
    getCategory: PropTypes.func,
    getCategoryProducts: PropTypes.func,
    products: PropTypes.arrayOf(PropTypes.shape()),
    sort: PropTypes.string,
    totalProductCount: PropTypes.number,
  };

  static defaultProps = {
    category: null,
    getCategory: () => {},
    getCategoryProducts: () => {},
    products: null,
    sort: null,
    totalProductCount: null,
  };

  static contextTypes = {
    history: PropTypes.shape(),
    i18n: PropTypes.func,
  };

  /**
   * ComponentDidMount life-cycle hook.
   */
  componentDidMount() {
    this.props.getCategory(this.props.params.categoryId);
  }

  /**
   * Fetches a new category if the router parameter has changed.
   * @param {Object} nextProps The next component props.
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.params.categoryId !== this.props.params.categoryId) {
      this.props.getCategory(nextProps.params.categoryId);
      this.props.setActiveFilters({});
    }
  }

  /**
   * Checks if categories are available
   * @return {boolean}
   */
  get hasCategories() {
    return Array.isArray(this.props.categories) && this.props.categories.length > 0;
  }

  /**
   * Returns the current view title.
   * @return {string} The view title.
   */
  get title() {
    const { __ } = this.context.i18n();
    const { category } = this.props;
    return category ? category.name : __('titles.categories');
  }

  /**
   * Fetches products by a given offset and limited number of items.
   * @param {number} offset An offset index from where to start.
   * @param {number} limit The limit of items beginning at offset.
   */
  handleGetProducts = (offset, limit) => {
    const { getCategoryProducts, sort } = this.props;

    getCategoryProducts(offset, limit, sort);
  };

  /**
   * Re-renders the category page with a different view mode.
   */
  handleToggleViewMode = () => {
    const { viewMode, setViewMode } = this.props;
    const nextViewMode = viewMode === GRID_VIEW ? LIST_VIEW : GRID_VIEW;

    setViewMode(nextViewMode);
  };

  /**
   * Changes the sort (Infinity container will be reset)
   * @param {string} sort The sort order for the products.
   */
  handleSortChange = (sort) => {
    if (this.props.sort === sort) {
      return;
    }

    this.handleGetProducts(0, ITEMS_PER_LOAD);
    this.props.changeSortOrder(sort);
  };

  /**
   * Is the products component shown?
   * @return {boolean}
   */
  get isProductsShown() {
    return this.props.totalProductCount !== 0;
  }

  /**
   * Is the no results component shown?
   * @return {boolean}
   */
  get isNoResultsShown() {
    return !this.hasCategories && this.props.totalProductCount === 0;
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const viewId = `${this.path}_${this.props.sort}`;

    return (
      <View>
        <ViewContent title={this.title}>
          <CategoryList />
          <FilterBar />
          {/*this.props.isProductsShown &&
            <Products
              viewMode={this.props.viewMode}
              handleGetProducts={this.props.handleGetProducts}
              products={this.props.products}
              loadingIndicator={loadingIndicator}
              totalProductCount={this.props.totalProductCount}
              viewId={viewId}
              limit={ITEMS_PER_LOAD}
            />
          */}
          {/*this.isNoResultsShown &&
            <NoResults
              headlineText="category.no_result.heading"
              bodyText="category.no_result.body"
              searchPhrase={this.title}
            />
          */}
        </ViewContent>
      </View>
    );
  }
}

const enhance = compose(
  NoBackgroundRender
);

export default connect(Category);