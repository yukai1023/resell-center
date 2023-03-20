import { configureStore } from "@reduxjs/toolkit";
import { appApi } from './slices/api';
import appReducer from './slices/app';

const store = configureStore({
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(appApi.middleware),
});

export default store;