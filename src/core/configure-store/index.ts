import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from 'reducers';

import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReudcer = persistReducer(persistConfig, reducer);

function configureStore() {
  const store = createStore(persistedReudcer, devToolsEnhancer({}));
  const persistor = persistStore(store);
  return { store, persistor };
}
export default configureStore;
