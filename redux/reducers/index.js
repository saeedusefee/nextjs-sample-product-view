import { combineReducers } from 'redux';

import Common from './Common';
import ShopApp from './ShopApp';

export default combineReducers({
  common: Common,
  shopApp: ShopApp
});
