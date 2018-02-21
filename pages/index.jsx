/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Helmet from 'react-helmet';
import '@shopgate/pwa-common/styles/reset';
import 'Styles/fonts';
import appConfig from '@shopgate/pwa-common/helpers/config';
import { isDev } from '@shopgate/pwa-common/helpers/environment';
import Router from '@virtuous/react-conductor';
import Route from '@virtuous/react-conductor/Route';
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
import Dialog from 'Components/Dialog';
import SnackBar from 'Components/SnackBar';
import locale from '../locale';
import reducers from './reducers';
import subscribers from './subscribers';
import Page from './Page';
import Category from './Category';
import Filter from './Filter';
import FilterAttribute from './FilterAttribute';
import Product from './Product';
import ProductGallery from './ProductGallery';
import Cart from './Cart';
import Favorites from './Favorites';
import Search from './Search';
import Login from './Login';
import Checkout from './Checkout';
import Orders from './Orders';
import Reviews from './Reviews';
import WriteReview from './WriteReview';

const devFontsUrl = 'https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700,900';

/**
 * The theme's main component defines all the routes (views) inside the application.
 * @returns {JSX}
 */
const Pages = () => (
  <App locale={locale} reducers={reducers} subscribers={subscribers}>
    <Portal name={APP_GLOBALS} />
    <Viewport>
      <ModalContainer component={Dialog} />
      <SnackBar />
      <Router start="/">
        <Route pattern="/" content={Page} />
        <Route pattern={`${CATEGORY_PATH}`} content={Category} />
      </Router>
      {/*<Route pattern={`${PAGE_PATH}/:pageId`} content={Page} />*/}
      {/*<Route pattern={`${CATEGORY_PATH}/:categoryId?/:selection?`} content={Category} />*/}
      {/*<Route pattern={`${FILTER_PATH}`} content={Filter} />*/}
      {/*<Route pattern={`${FILTER_PATH}/:attribute`} content={FilterAttribute} />*/}
      {/* <Route pattern={`${ITEM_PATH}/:productId`} content={Product} />*/}
      {/*<Route pattern={`${ITEM_PATH}/:productId/gallery/:initialSlide?`} content={ProductGallery} />*/}
      {/*<Route pattern={`${ITEM_PATH}/:productId/reviews/`} content={Reviews} />*/}
      {/*<Route pattern={`${CART_PATH}`} content={Cart} />*/}
      {
        appConfig.hasFavorites
        && null
        // && <Route pattern={`${FAVORITES_PATH}`} content={Favorites} />
      }
      {/*<Route pattern={`${SEARCH_PATH}`} content={Search} />*/}
      {/*<Route pattern={`${LOGIN_PATH}`} content={Login} />*/}

      {/*<Portal name={APP_ROUTES} />*/}

      {/*<AuthRoutes to={`${LOGIN_PATH}`}>*/}
      {/*<Route pattern={`${CHECKOUT_PATH}`} content={Checkout} />*/}
      {/*<Route pattern={`${ORDERS_PATH}`} content={Orders} />*/}
      {/*<Route pattern={`${ITEM_PATH}/:productId/write_review/`} content={WriteReview} />*/}
      {/*{/*</AuthRoutes>*/}

      {isDev && (
        <Helmet>
          <link href={devFontsUrl} rel="stylesheet" />
        </Helmet>
      )}
    </Viewport>
  </App>
);

export default Pages;
