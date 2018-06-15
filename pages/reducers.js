import { combineReducers } from 'redux';
import client from '@shopgate/pwa-common/reducers/client';
import url from '@shopgate/pwa-common/reducers/url';
import user from '@shopgate/pwa-common/reducers/user';
import page from '@shopgate/pwa-common/reducers/page';
import view from '@shopgate/pwa-common/reducers/view';
import menu from '@shopgate/pwa-common/reducers/menu';
import modal from '@shopgate/pwa-common/reducers/modal';
import toast from '@shopgate/pwa-common/reducers/toast';
import cart from '@shopgate/pwa-common-commerce/cart/reducers';
import category from '@shopgate/pwa-common-commerce/category/reducers';
import favorites from '@shopgate/pwa-common-commerce/favorites/reducers';
import filter from '@shopgate/pwa-common-commerce/filter/reducers';
import product from '@shopgate/pwa-common-commerce/product/reducers';
import search from '@shopgate/pwa-common-commerce/search/reducers';
import reviews from '@shopgate/pwa-common-commerce/reviews/reducers';
import router from '@virtuous/redux-conductor/reducer';
import navigator from 'Components/Navigator/reducer';
import extensions from 'Extensions/reducers';

const reducers = combineReducers({
  cart,
  category,
  client,
  ...extensions && { extensions: combineReducers(extensions) },
  favorites,
  filter,
  menu,
  modal,
  navigator,
  page,
  product,
  router,
  reviews,
  search,
  toast,
  url,
  user,
  view,
});

export default reducers;
