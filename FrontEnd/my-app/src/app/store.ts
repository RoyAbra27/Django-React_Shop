import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import LoginSlice from './Authentication/authenticationSlice';

export const store = configureStore({
  reducer: {

    auth: LoginSlice,
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
