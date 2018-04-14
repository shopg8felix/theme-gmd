import React from 'react';
import Helmet from 'react-helmet';
import '@shopgate/pwa-common/styles/reset';
import 'Styles/fonts';
import Router from '@virtuous/react-conductor/Router';
import Route from '@virtuous/react-conductor/Route';
import appConfig from '@shopgate/pwa-common/helpers/config';
import { isDev } from '@shopgate/pwa-common/helpers/environment';
import AuthRoutes from '@shopgate/pwa-common/components/Router/components/AuthRoutes';
import ModalContainer from '@shopgate/pwa-common/components/ModalContainer';
import App from '@shopgate/pwa-common/App';
import {
  INDEX_PATH,
  PAGE_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  CHECKOUT_PATH,
} from '@shopgate/pwa-common/constants/RoutePaths';
import { CATEGORY_PATH } from '@shopgate/pwa-common-commerce/category/constants';
import { FILTER_PATH } from '@shopgate/pwa-common-commerce/filter/constants';
import { ITEM_PATH } from '@shopgate/pwa-common-commerce/product/constants';
import { SEARCH_PATH } from '@shopgate/pwa-common-commerce/search/constants';
import { CART_PATH } from '@shopgate/pwa-common-commerce/cart/constants';
import { ORDERS_PATH } from '@shopgate/pwa-common-commerce/orders/constants';
import { FAVORITES_PATH } from '@shopgate/pwa-common-commerce/favorites/constants';
import Portal from '@shopgate/pwa-common/components/Portal';
import { APP_ROUTES, APP_GLOBALS } from '@shopgate/pwa-common/constants/Portals';
import Viewport from 'Components/Viewport';
import View from 'Components/View';
import Dialog from 'Components/Dialog';
import SnackBar from 'Components/SnackBar';
import locale from '../locale';
import reducers from './reducers';
import subscribers from './subscribers';
import Page from './Page';
import Category from './Category';
// Import Filter from './Filter';
// Import FilterAttribute from './FilterAttribute';
// Import Product from './Product';
// Import ProductGallery from './ProductGallery';
// Import Cart from './Cart';
// Import Favorites from './Favorites';
// Import Search from './Search';
// Import Login from './Login';
// Import Orders from './Orders';
// Import Reviews from './Reviews';
// Import WriteReview from './WriteReview';
import RootCategory from './RootCategory';
import Worker from './worker';

const devFontsUrl = 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,900';

/**
 * The theme's main component defines all the routes (views) inside the application.
 * @returns {JSX}
 */
const Pages = () => (
  <App locale={locale} reducers={reducers} subscribers={subscribers} Worker={Worker}>
    <Portal name={APP_GLOBALS} />
    <Viewport>
      <ModalContainer component={Dialog} />
      <SnackBar />
      <Router>
        <Route pattern="/" component={Page} />
        <Route pattern={`${CATEGORY_PATH}`} component={RootCategory} />
        <Route pattern={`${CATEGORY_PATH}/:categoryId?/:selection?`} component={Category} />
      </Router>
      {isDev && (
        <Helmet>
          <link href={devFontsUrl} rel="stylesheet" />
        </Helmet>
      )}
    </Viewport>
  </App>
);

export default Pages;
