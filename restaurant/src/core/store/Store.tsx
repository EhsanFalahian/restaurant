import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

const store = configureStore({
  reducer: {
    cart: counterReducer,
  },
});

export default store;
