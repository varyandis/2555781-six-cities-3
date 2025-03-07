import { createReducer } from '@reduxjs/toolkit';
import {
  cityAction,
  loadOffers,
  offersAction,
  requireAuthorization,
  setError,
  setOffersDataLoadingStatus,
  setUserAvatar,
  setUserLogin,
} from './action';
import { TypeOffer } from '../types/offers';
import { AuthorizationStatus } from '../const';

type AppState = {
  city: string;
  listOffers: TypeOffer[];
  offers: TypeOffer[];
  authorizationStatus: AuthorizationStatus;
  isOffersDataLoading: boolean;
  error: string | null;
  userLogin: string;
  userAvatar: string;
};

const initialState: AppState = {
  city: '',
  listOffers: [],
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isOffersDataLoading: false,
  error: null,
  userLogin: '',
  userAvatar: '',
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserLogin, (state, action) => {
      state.userLogin = action.payload;
    })
    .addCase(setUserAvatar, (state, action) => {
      state.userAvatar = action.payload;
    });
});

export default reducer;
