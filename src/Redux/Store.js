import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '@/Redux/ApiSlice';

export const Store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware), // Add middleware for RTK Query
});
