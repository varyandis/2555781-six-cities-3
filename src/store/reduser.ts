import { createReducer } from '@reduxjs/toolkit';
import { cityAction, loadOffers, offersAction, requireAuthorization } from './action';
import { TypeOffer } from '../types/offers';
import { AuthorizationStatus } from '../const';

type AppState = {
  city: string;
  listOffers: TypeOffer[];
  offers: TypeOffer[];
  authorizationStatus: string;
}

const initialState: AppState = {
  city: '',
  listOffers: [],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export default reducer;
