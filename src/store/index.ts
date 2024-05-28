import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonReducer from './commonSlice';
import { dataApi } from './data.api';

const rootReducer = combineReducers({
  common: commonReducer,
  [dataApi.reducerPath]: dataApi.reducer,
});

export type StateType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dataApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
