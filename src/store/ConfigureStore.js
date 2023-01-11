import { configureStore } from '@reduxjs/toolkit';
import Countries from './Countries';

const store = configureStore({
  reducer: Countries,
});

export default store;
