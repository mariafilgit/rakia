import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonReducer from './commonSlice';

const rootReducer = combineReducers({
  common: commonReducer,
});

export type StateType = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
