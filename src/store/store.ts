import { configureStore } from '@reduxjs/toolkit';
import sideBarReducer from './slices/sideBarSlice';
import mapReducer from "./slices/mapSlice";

const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
    map:mapReducer
  }
});

export default store;
