import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authenticationSlice from './Authentication/authenticationSlice';
import categorySlice from './Category/categorySlice';
import  productSlice  from './Products/ProductSlice';

export const store = configureStore({
  reducer: {

    auth: authenticationSlice,
    category: categorySlice,
    product: productSlice
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
