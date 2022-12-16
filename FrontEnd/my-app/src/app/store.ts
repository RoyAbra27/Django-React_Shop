import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationSlice from './Authentication/authenticationSlice';
import categorySlice from './Category/categorySlice';

export const store = configureStore({
  reducer: {

    auth: authenticationSlice,
    category: categorySlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
