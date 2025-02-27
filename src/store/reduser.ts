import { createReducer } from '@reduxjs/toolkit';
import { cityAction, offersAction } from './action';
import { TypeOffer } from '../types/offers';

interface AppState {
  city: string;
  listOffers: TypeOffer[];
}

const initialState: AppState = {
  city: 'Amsterdam',
  listOffers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersAction, (state, action) => {
      state.listOffers = action.payload;
    });
});

export default reducer;
