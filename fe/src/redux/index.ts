import { configureStore } from '@reduxjs/toolkit';
import slides from './slices';
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, slides)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]

})

export const persistor = persistStore(store)
