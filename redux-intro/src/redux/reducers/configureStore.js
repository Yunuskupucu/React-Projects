import { createStore } from 'redux';

import reducers from './index';

export const configureStore = () => {
  return createStore(reducers);
};
