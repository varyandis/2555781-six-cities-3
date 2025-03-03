import { createReducer } from '@reduxjs/toolkit';
import { cityAction, loadOffers, offersAction } from './action';
import { TypeOffer } from '../types/offers';

type AppState = {
  city: string;
  listOffers: TypeOffer[];
  offers: TypeOffer[];
}

const initialState: AppState = {
  city: '',
  listOffers: [],
  offers: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(cityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(offersAction, (state, action) => {
      state.listOffers = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export default reducer;
